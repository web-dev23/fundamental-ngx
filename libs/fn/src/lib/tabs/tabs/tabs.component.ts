import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    Input,
    NgZone,
    QueryList,
    TrackByFunction,
    ViewChild,
    ViewChildren
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty, coerceElement, coerceNumberProperty } from '@angular/cdk/coercion';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map, Observable, ReplaySubject, switchMap } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { DestroyedBehavior } from '@fundamental-ngx/fn/cdk';
import { coerceBoolean, GetElementWidth, GetElementWidthFn } from '@fundamental-ngx/fn/utils';
import { ITab } from '../ITab';
import { TabDirective } from '../tab.directive';
import equal from 'fast-deep-equal';

type AnalyzedTab = ITab & { requiredWidth?: number };
type SortedTabs = { visible: AnalyzedTab[]; hidden: AnalyzedTab[] };

@Component({
    selector: 'fn-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: [`./tabs.component.scss`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyedBehavior]
})
export class TabsComponent implements AfterViewInit {
    @Input()
    loadingStrategy: 'lazy' | 'preload' = 'lazy';

    @Input()
    @coerceBoolean
    alwaysFresh = true;

    @Input()
    display: 'single' | 'all' = 'single';

    @Input()
    set collapseOverflow(value: BooleanInput) {
        const collapseOverflow = coerceBooleanProperty(value);
        if (this._collapseOverflow$.value !== collapseOverflow) {
            this._collapseOverflow$.next(collapseOverflow);
        }
    }

    @Input()
    set maxVisibleTabs(value: number) {
        const maxVisibleTabs = coerceNumberProperty(value);
        if (this._maxVisibleTabs$.value !== maxVisibleTabs) {
            this._maxVisibleTabs$.next(maxVisibleTabs);
        }
    }

    @Input()
    @coerceBoolean
    toggle: boolean;

    @ViewChildren(TabDirective) tabDirectives: QueryList<TabDirective>;

    @ViewChild('postfixElement', { read: ElementRef })
    set postfixElement({ nativeElement }) {
        this.postfixWidth = this.getElementWidth(nativeElement);
    }

    tabsHeaderHostResize$ = new ReplaySubject<ResizeObserverEntry>();

    tabs: ITab[] = [];

    selectedTab: string = null;

    visitedTabs = new Map<string, boolean>();

    sortedTabs: SortedTabs;
    isCollapsed: boolean;

    postfixWidth: number;

    private _tabComponents$ = new ReplaySubject<ITab[]>(1);
    private _tabDirectives$!: Observable<TabDirective[]>;
    private _collapseOverflow$ = new BehaviorSubject<boolean>(false);
    private _maxVisibleTabs$ = new BehaviorSubject<number>(Number.MAX_SAFE_INTEGER);
    private _analyzedTabs$!: Observable<AnalyzedTab[]>;
    private _refreshTabsVisual$ = new BehaviorSubject<void>(void 0);

    constructor(
        private _destroy$: DestroyedBehavior,
        private _cd: ChangeDetectorRef,
        private _elementRef: ElementRef<HTMLElement>,
        private _ngZone: NgZone,
        @Inject(GetElementWidth) private getElementWidth: GetElementWidthFn
    ) {}

    registerTabs(tabs: ITab[]): void {
        this.sortedTabs = { visible: tabs, hidden: [] };
        if (this.selectedTab && !this.tabs.find((item) => item.value === this.selectedTab)) {
            this.selectedTab = this.tabs.find((item) => !item.disabled)?.value;
        }
        this.tabs = tabs;
        this._cd.detectChanges();

        this._tabComponents$.next(tabs);
    }

    isHidden(tab: ITab): boolean {
        return this.display === 'single' && this.selectedTab !== tab.value;
    }

    shouldRender(tab: ITab): boolean {
        if (this.loadingStrategy === 'preload') {
            return true;
        }
        if (this.loadingStrategy === 'lazy') {
            if (this.alwaysFresh) {
                return !this.isHidden(tab);
            }
            return this.visitedTabs.get(tab.value);
        }
        return false;
    }

    onTabSelect($event: string): void {
        if ($event !== this.selectedTab) {
            this.selectedTab = $event;
            this._notifyTabComponents();
            this._refreshTabsVisual$.next();
        }
    }

    ngAfterViewInit(): void {
        this._tabDirectives$ = this.tabDirectives.changes.pipe(
            startWith(this.tabDirectives),
            map((tq) => tq.toArray() as TabDirective[])
        );

        this._analyzedTabs$ = this._getAnalyzedTabs$();
        this._listenToCollapseOverflowChanges();
    }

    trackByFn: TrackByFunction<ITab> = (...args) => args[1].value;

    private _getAnalyzedTabs$(): Observable<AnalyzedTab[]> {
        let tabs: Record<string, AnalyzedTab>;
        return combineLatest([this._tabDirectives$, this._tabComponents$]).pipe(
            map(([directives, components]) => [
                directives,
                components.reduce((acc, next) => {
                    const requiredWidth = tabs ? tabs[next.value]?.requiredWidth : NaN;
                    acc[next.value] = {
                        ...next,
                        requiredWidth
                    };
                    return acc;
                }, {})
            ]),
            map(([directives, recalculatedTabs]: [TabDirective[], Record<string, AnalyzedTab>]) => {
                directives.forEach((tab) => {
                    const element = coerceElement(tab.elementRef());
                    if (recalculatedTabs[tab.value]) {
                        const iTab = recalculatedTabs[tab.value];
                        iTab.requiredWidth = Math.ceil(this.getElementWidth(element, true));
                    }
                });
                return recalculatedTabs;
            }),
            distinctUntilChanged((prev, recalculatedTabs) => {
                const recalculated = Object.keys(recalculatedTabs).reduce((acc, next) => {
                    acc[next] = recalculatedTabs[next].requiredWidth;
                    return acc;
                }, {});
                const previous = Object.keys(tabs).reduce((acc, next) => {
                    acc[next] = tabs[next].requiredWidth;
                    return acc;
                }, {});
                return equal(recalculated, previous);
            }),
            tap((recalculatedTabs) => (tabs = recalculatedTabs)),
            map((recalculatedTabs) => Object.values(recalculatedTabs))
        );
    }

    private _listenToCollapseOverflowChanges(): void {
        this._collapseOverflow$
            .pipe(
                switchMap((collapseOverflow: boolean) => {
                    if (collapseOverflow) {
                        return this._overflownTabs$();
                    }
                    return this._defaultTabs$();
                }),
                distinctUntilChanged((previous, next) => equal(next, this.sortedTabs)),
                tap(({ hidden }) => (this.isCollapsed = hidden.length > 0)),
                tap((sortedTabs) => (this.sortedTabs = sortedTabs)),
                tap(() => this._cd.detectChanges()),
                tap(() => console.log('something changed')),
                takeUntil(this._destroy$)
            )
            .subscribe();
    }

    private _defaultTabs$(): Observable<SortedTabs> {
        return combineLatest([this._tabComponents$, this._refreshTabsVisual$]).pipe(
            map(([visible]) => ({
                visible,
                hidden: []
            }))
        );
    }

    private _overflownTabs$(): Observable<SortedTabs> {
        return combineLatest([
            this.tabsHeaderHostResize$,
            this._maxVisibleTabs$,
            this._analyzedTabs$,
            this._refreshTabsVisual$
        ]).pipe(
            map(([hostResize, maxVisibleTabs, analyzedTabs]) => {
                const hostWidth = hostResize.contentRect.width;
                return [
                    hostWidth,
                    this._getGroupedTabs(hostWidth, maxVisibleTabs, analyzedTabs),
                    maxVisibleTabs,
                    analyzedTabs
                ] as [number, SortedTabs, number, AnalyzedTab[]];
            }),
            map(([hostWidth, sortedTabs, maxVisibleTabs, analyzedTabs]) =>
                this._getActiveVisibleGroupTabs(hostWidth, sortedTabs, maxVisibleTabs, analyzedTabs)
            )
        );
    }

    private _getGroupedTabs(hostWidth: number, maxVisibleTabs: number, analyzedTabs: AnalyzedTab[]): SortedTabs {
        let capacityLeft = hostWidth;
        let numberOfVisibleTabs = 0;
        for (let i = 0; capacityLeft > this.postfixWidth && analyzedTabs.length > i && maxVisibleTabs > i; i++) {
            const tabWidth = analyzedTabs[i].requiredWidth;

            if (capacityLeft - tabWidth >= this.postfixWidth + 1) {
                numberOfVisibleTabs++;
            }
            capacityLeft -= tabWidth;
        }
        return {
            visible: analyzedTabs.slice(0, numberOfVisibleTabs),
            hidden: analyzedTabs.slice(numberOfVisibleTabs)
        };
    }

    private _getActiveVisibleGroupTabs(
        hostWidth: number,
        sortedTabs: SortedTabs,
        maxVisibleTabs: number,
        analyzedTabs: AnalyzedTab[]
    ): SortedTabs {
        const { visible, hidden } = sortedTabs;
        const hiddenActiveTabIndex = hidden.findIndex((tab) => tab.value === this.selectedTab);
        if (hiddenActiveTabIndex < 0) {
            return { visible, hidden };
        }
        const hiddenTab = hidden[hiddenActiveTabIndex];

        const numOfVisibleTabs = visible.length;
        const capacity = hostWidth;
        const tabsLimit = maxVisibleTabs;
        const visibleTabsWidth = visible.reduce((total, tab) => total + tab.requiredWidth, 0);

        let widthRequired = hiddenTab.requiredWidth - (capacity - visibleTabsWidth - this.postfixWidth);
        let numOfTabsToMove = 0;

        /** As long as:
         * - There is not enough space for tab to move
         * - There are other tabs to move from visible to overflow
         * - Number of visible tabs is larger than the limit */
        for (
            let i = numOfVisibleTabs - 1;
            (widthRequired > 0 && i >= 0) || tabsLimit < numOfVisibleTabs + 1 - numOfTabsToMove;
            i--
        ) {
            widthRequired -= analyzedTabs[i].requiredWidth;
            numOfTabsToMove++;
        }

        const [selectedTab] = hidden.splice(hiddenActiveTabIndex, 1);
        const tabsToMove = visible.splice(-numOfTabsToMove, numOfTabsToMove, selectedTab);
        hidden.unshift(...tabsToMove);
        return { visible, hidden };
    }

    private _notifyTabComponents(): void {
        this.tabs.forEach((iTab) => {
            iTab.selectedChange(iTab.value === this.selectedTab);
        });
    }

    nativeInteraction(tab: AnalyzedTab, $event: Event): void {
        tab.nativeInteraction($event);
    }
}
