import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'fd-multi-combobox-async-example',
    templateUrl: './multi-combobox-async-example.component.html'
})
export class MultiInputAsyncExampleComponent implements OnInit {
    selected = [];

    dropdownValues;

    getDropdownValues(): Observable<string[]> {
        return this.http.get<string[]>('./assets/multi-combobox-values.json');
    }

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.dropdownValues = this.getDropdownValues();
    }
}
