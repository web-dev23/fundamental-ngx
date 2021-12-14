import { Component } from '@angular/core';

@Component({
    selector: 'fd-multi-combobox-displaywith-example',
    templateUrl: './multi-combobox-displaywith-example.component.html'
})
export class MultiComboboxDisplaywithExampleComponent {
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
        return obj.name.toLocaleUpperCase();
    }
}
