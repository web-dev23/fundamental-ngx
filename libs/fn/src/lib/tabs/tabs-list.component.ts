import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Inject,
    Input,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import { DestroyedBehavior } from '@fundamental-ngx/fn/cdk';
import { coerceBoolean } from '@fundamental-ngx/fn/utils';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';
import { TabsComponent } from './tabs/tabs.component';
import { ProvidedTab } from './tab/ProvidedTab';
import { ITab } from './ITab';

@Component({
    selector: 'fn-tabs-list, [fn-tabs-list]',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.fn-tabs]': 'true',
        role: 'tablist'
    },
    providers: [DestroyedBehavior]
})
export class TabsListComponent implements AfterViewInit {
    @Input()
    @coerceBoolean
    toggle: boolean;

    /** @hidden */
    @ContentChildren(ProvidedTab)
    tabs!: QueryList<ITab>;

    /** @hidden */
    constructor(private _destroy$: DestroyedBehavior, @Inject(TabsComponent) private tabsComponent: TabsComponent) {}

    /** @hidden */
    ngAfterViewInit(): void {
        this.tabs.changes
            .pipe(
                startWith(this.tabs),
                map((t) => t.toArray()),
                tap((tabs) => this.tabsComponent.registerTabs(tabs)),
                takeUntil(this._destroy$)
            )
            .subscribe();
    }
}
