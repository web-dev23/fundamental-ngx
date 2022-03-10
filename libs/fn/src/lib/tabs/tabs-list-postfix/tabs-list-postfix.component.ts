import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'fn-tabs-list-postfix, [fn-tabs-list-postfix]',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.fn-tabs__right-container]': 'true',
        role: 'tab'
    }
})
export class TabsListPostfixComponent {
    constructor() {}
}
