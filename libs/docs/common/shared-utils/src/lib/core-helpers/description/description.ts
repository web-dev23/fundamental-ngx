import { Component } from '@angular/core';

@Component({
    // TODO(ds): e2e-refactor
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'description',
    template: `
        <p class="description">
            <ng-content></ng-content>
        </p>
    `,
    styles: [
        `
            .description {
                font-weight: 300;
                font-size: 1rem;
                margin-bottom: 1.5rem;
            }
        `
    ]
})
export class DescriptionComponent {}
