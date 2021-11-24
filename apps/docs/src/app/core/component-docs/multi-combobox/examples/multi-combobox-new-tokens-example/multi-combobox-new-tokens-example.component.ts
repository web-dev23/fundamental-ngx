import { Component } from '@angular/core';

@Component({
    selector: 'fd-multi-combobox-new-tokens-example',
    templateUrl: './multi-combobox-new-tokens-example.component.html'
})
export class MultiInputNewTokensExampleComponent {
    values = [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Pineapple' },
        { name: 'Tomato' },
        { name: 'Kiwi' },
        { name: 'Strawberry' },
        { name: 'Blueberry' },
        { name: 'Orange' }
    ];

    selected = [];

    displayFunc(obj: any): string {
        return obj.name;
    }

    parseFunc(value: string): object {
        return { name: value };
    }

    validateFunc(value: string): boolean {
        return value?.length >= 3;
    }
}
