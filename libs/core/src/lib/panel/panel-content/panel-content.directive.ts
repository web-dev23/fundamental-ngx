import { Directive, HostBinding, Input } from '@angular/core';

let panelContentUniqueId = 0;

/**
 * Applies the panel content style to a div element.
 *
 * ```html
 * <div fd-panel-content>Panel Content</div>
 * ```
 */
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-panel-content]'
})
export class PanelContentDirective {
    /** @hidden */
    @HostBinding('class.fd-panel__content')
    readonly fdPanelContentClass: boolean = true;

    /** Custom height of the content container. */
    @Input()
    @HostBinding('style.height')
    height: string | null = null;

    /** Custom min-height of the content container. */
    @Input()
    @HostBinding('style.min-height')
    minHeight: string | null = null;

    /** Custom max-height of the content container. */
    @Input()
    @HostBinding('style.max-height')
    maxHeight: string | null = null;

    /** aria-label attribute of the host element element. */
    @Input()
    @HostBinding('attr.aria-label')
    ariaLabel: string | null = null;

    /** aria-labelledby attribute of the host element element. */
    @Input()
    @HostBinding('attr.aria-labelledby')
    ariaLabelledBy: string | null = null;

    /** role attribute of the host element. */
    @Input()
    @HostBinding('attr.role')
    role = 'region';

    /** Id of the host element. */
    @Input()
    @HostBinding('attr.id')
    set id(value: string | undefined) {
        this._id = value || this._defaultId;
    }

    get id(): string {
        return this._id;
    }

    /** @hidden */
    private readonly _defaultId = 'fd-panel-content-' + panelContentUniqueId++;;
    
    /** @hidden */
    private _id: string = this._defaultId;

}
