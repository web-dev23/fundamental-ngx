import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DestroyedBehavior, FN_SELECTABLE_ITEM_PROVIDER, SelectableItemToken } from '@fundamental-ngx/fn/cdk';

let identifiers = 0;

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'li[fn-internal-tab-item]',
    host: {
        '[class.fn-tabs__item]': 'true',
        role: 'tab',
        '[attr.id]': 'value'
    },
    providers: [
        {
            provide: FN_SELECTABLE_ITEM_PROVIDER,
            useExisting: TabDirective
        },
        DestroyedBehavior
    ]
})
export class TabDirective implements Partial<SelectableItemToken<string>> {
    @Input()
    value = `fn-tab-${++identifiers}`;

    @Input()
    selected: boolean;

    @Output() nativeInteraction: Observable<Event>;

    /** @hidden */
    constructor(
        private _cd: ChangeDetectorRef,
        private _destroy$: DestroyedBehavior,
        private _elementRef: ElementRef<HTMLElement>,
        private _ngZone: NgZone
    ) {}

    setSelected(isSelected: boolean): void {
        this.selected = isSelected;
        const { classList } = this._elementRef.nativeElement;
        if (isSelected) {
            classList.add('fn-tabs__item--selected');
        } else {
            classList.remove('fn-tabs__item--selected');
        }
        this._elementRef.nativeElement.setAttribute('aria-selected', `${isSelected}`);
    }

    getSelected(): boolean {
        return this.selected;
    }

    elementRef(): ElementRef<HTMLElement> {
        return this._elementRef;
    }
}
