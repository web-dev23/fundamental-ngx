import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MultiInputSelectionChangeEvent } from '@fundamental-ngx/platform/form';

@Component({
    selector: 'fdp-platform-multi-input-multiple-value-example',
    templateUrl: './platform-multi-input-multiple-value-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformMultiInputMultipleValueExampleComponent {
    datasource = [
        { state: 'Alabama', city: 'Montgomery' },
        { state: 'Plaska', city: 'Juneau' },
        { state: 'Arizona', city: 'Phoenix' },
        { state: 'Arkansas', city: 'Little Rock' },
        { state: 'California', city: 'Sacramento' },
        { state: 'Colorado', city: 'Denver' }
    ];

    // datasource = new MultiInputDataSource(new MultiInputDateProvider());

    selected = [this.datasource[0], this.datasource[1]];

    selectedItem2 = null;

    showValues(item: MultiInputSelectionChangeEvent): void {
        this.selectedItem2 = item.payload;
    }
}
