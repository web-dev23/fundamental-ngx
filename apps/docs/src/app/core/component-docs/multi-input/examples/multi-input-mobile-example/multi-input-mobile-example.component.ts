import { Component } from '@angular/core';
import { MobileModeConfig } from '@fundamental-ngx/core/mobile-mode';

@Component({
    selector: 'fd-multi-combobox-mobile-example',
    templateUrl: './multi-input-mobile-example.component.html'
})
export class MultiInputMobileExampleComponent {
    selectedValues: any[] = [];

    secondConfig: MobileModeConfig = {
        approveButtonText: 'Approve',
        cancelButtonText: 'Cancel',
        hasCloseButton: true,
        dialogConfig: {
            ariaLabel: 'Select fruits dialog'
        }
    };

    values: any[] = ['Apple', 'Banana', 'Pineapple', 'Tomato', 'Kiwi', 'Strawberry', 'Blueberry', 'Orange'];
}
