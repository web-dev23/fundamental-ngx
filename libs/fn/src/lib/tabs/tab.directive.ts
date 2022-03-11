import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
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
export class TabDirective implements Partial<SelectableItemToken<string>>, OnInit, OnDestroy {
    @Input()
    value = `fn-tab-${++identifiers}`;

    @Input()
    selected: boolean;

    @Input()
    listeners: Record<string, Array<(...args: any) => void>> = {};

    private _handlers: (() => void)[] = [];

    /** @hidden */
    constructor(
        private _cd: ChangeDetectorRef,
        private _destroy$: DestroyedBehavior,
        private _elementRef: ElementRef<HTMLElement>,
        private _ngZone: NgZone,
        private renderer2: Renderer2
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

    ngOnInit(): void {
        this._handlers = Object.keys(this.listeners)
            .reduce((acc, listenerName) => {
                this.listeners[listenerName].forEach((listener) => {
                    acc.push({
                        listener,
                        listenerName
                    });
                });
                return acc;
            }, [])
            .map(({ listenerName, listener }) => {
                console.log({ listenerName, listener });
                return this.renderer2.listen(this._elementRef.nativeElement, listenerName, listener);
            });
    }

    ngOnDestroy(): void {
        this._handlers.forEach((d) => d());
    }
}
