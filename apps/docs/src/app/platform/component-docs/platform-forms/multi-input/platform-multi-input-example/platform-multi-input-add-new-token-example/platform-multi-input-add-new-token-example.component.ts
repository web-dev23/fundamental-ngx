import { Component } from '@angular/core';
import { MultiInputSelectionChangeEvent } from '@fundamental-ngx/platform/form';
// import { MultiInputDataSource } from '@fundamental-ngx/platform/';
// import { MultiInputDateProvider } from './platform-multi-input-add-new-token-example.service';

@Component({
    selector: 'fdp-platform-multi-input-add-new-token-example',
    templateUrl: './platform-multi-input-add-new-token-example.component.html'
})
export class PlatformMultiInputAddNewTokenExampleComponent {
    // datasource = [
    //     { state: 'Alabama', city: 'Montgomery' },
    //     { state: 'Plaska', city: 'Juneau' },
    //     { state: 'Arizona', city: 'Phoenix' },
    //     { state: 'Arkansas', city: 'Little Rock' },
    //     { state: 'California', city: 'Sacramento' },
    //     { state: 'Colorado', city: 'Denver' },
    // ];

    // datasource = new MultiInputDataSource(new MultiInputDateProvider());

    selected = [{ state: 'Alabama', city: 'Montgomery' }];
    selectedItem2 = null;

    showValues(item: MultiInputSelectionChangeEvent): void {
        this.selectedItem2 = item.payload;
    }
}
