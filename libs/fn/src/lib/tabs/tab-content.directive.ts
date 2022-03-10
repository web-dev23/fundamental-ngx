import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[fnTabContent]'
})
export class TabContentDirective {
    constructor(readonly templateRef: TemplateRef<any>) {}
}
