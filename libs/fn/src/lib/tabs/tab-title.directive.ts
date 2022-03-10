import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[fnTabTitle]'
})
export class TabTitleDirective {
    constructor(readonly templateRef: TemplateRef<any>) {}
}
