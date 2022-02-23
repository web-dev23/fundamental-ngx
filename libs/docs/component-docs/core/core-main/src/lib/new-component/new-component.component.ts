import { Component } from '@angular/core';

@Component({
    // TODO(ds): e2e-refactor
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-home',
    templateUrl: './new-component.component.html'
})
export class NewComponentComponent {
    onLoad(): void {}
    onError(): void {}
}
