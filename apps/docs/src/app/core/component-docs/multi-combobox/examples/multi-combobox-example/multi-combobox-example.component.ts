import { Component } from '@angular/core';

@Component({
    selector: 'fd-multi-combobox-example',
    templateUrl: './multi-combobox-example.component.html'
})
export class MultiInputExampleComponent {
    selected = ['Apple', 'Banana', 'Pineapple', 'Tomato', 'Kiwi', 'Strawberry', 'Blueberry'];
    secondSelected = ['Pineapple'];
    thirdSelected = ['Kiwi'];
    selectedDisabledAutoComplete = ['Kiwi'];
}