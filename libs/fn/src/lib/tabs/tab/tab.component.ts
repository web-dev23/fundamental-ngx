import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    Optional,
    Output,
    TemplateRef,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { DestroyedBehavior, FnDisabledProvider } from '@fundamental-ngx/fn/cdk';
import { coerceBoolean } from '@fundamental-ngx/fn/utils';
import { TabContentDirective } from '../tab-content.directive';
import { TabTitleDirective } from '../tab-title.directive';
import { ProvidedTab } from './ProvidedTab';
import { ProvidedTabFactory } from './ProvidedTabFactory';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

let identifiers = 0;

@Component({
    selector: 'fn-tab, [fn-tab]',
    templateUrl: './tab.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: 'currentTab',
            useExisting: TabComponent
        },
        {
            provide: ProvidedTab,
            useFactory: ProvidedTabFactory,
            deps: ['currentTab', NgZone]
        },
        DestroyedBehavior,
        FnDisabledProvider
    ]
})
export class TabComponent {
    @Input()
    class: string;

    @Input()
    @coerceBoolean
    selected = false;

    @Input()
    identifier = `fn-tab-${++identifiers}`;

    @Input()
    title: string;

    @Output()
    selectedChange = new EventEmitter<boolean>();

    @Output()
    deactivated = new EventEmitter<void>();

    @Output()
    activated = new EventEmitter<void>();

    @ViewChild('titleTemplate')
    titleTemplate: TemplateRef<void>;

    @ViewChild('bodyTemplate')
    bodyTemplate: TemplateRef<void>;

    @ContentChild(TabContentDirective)
    tabContent?: { templateRef: TemplateRef<any> };

    @ContentChild(TabTitleDirective)
    tabTitle?: { templateRef: TemplateRef<any> };

    readonly _stateChanges$ = new Subject<{ selected: boolean }>();
    private _visibleTabWidth: number;

    /** @hidden */
    constructor(
        @Optional() readonly disabled$: FnDisabledProvider,
        private _destroy$: DestroyedBehavior,
        private _elementRef: ElementRef,
        private _ngZone: NgZone
    ) {
        this._stateChanges$
            .pipe(
                tap(({ selected }) => {
                    if (this.selected) {
                        if (!selected) {
                            this.deactivated.emit();
                        }
                    } else {
                        if (selected) {
                            this.activated.emit();
                        }
                    }
                    if (this.selected !== selected) {
                        this.selected = selected;
                        this.selectedChange.emit(selected);
                    }
                }),
                takeUntil(this._destroy$)
            )
            .subscribe();
    }

    setVisibleTabWidth(val: number): void {
        this._visibleTabWidth = val;
    }

    getVisibleTabWidth(): number {
        return this._visibleTabWidth;
    }

    elementRef(): ElementRef<HTMLElement> {
        return this._elementRef;
    }
}
