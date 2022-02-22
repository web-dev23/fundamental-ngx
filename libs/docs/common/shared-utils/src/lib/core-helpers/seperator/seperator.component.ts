import { Component } from '@angular/core';

@Component({
    // TODO(ds): e2e-refactor
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'separator',
    template: ``,
    styles: [
        `
            :host {
                display: block;
                margin-top: 2rem;
                border-bottom: 1px solid #e3e3e3;
            }
        `
    ]
})
export class SeparatorComponent {}
