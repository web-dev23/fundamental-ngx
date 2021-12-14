import { Component } from '@angular/core';

@Component({
    selector: 'fd-multi-combobox-filter-example',
    templateUrl: './multi-combobox-filter-example.component.html'
})
export class MultiComboboxFilterExampleComponent {
    selected = [];

    customFilter(content: any[], searchTerm: string): any[] {
        if (!searchTerm) {
            return content;
        }
        return content.filter((item) => item.startsWith(searchTerm));
    }
}
