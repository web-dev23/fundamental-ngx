import { Component } from '@angular/core';

import { DATA_PROVIDERS } from '@fundamental-ngx/platform/shared';

@Component({
    selector: 'fdp-platform-multi-input-decline-example',
    templateUrl: './platform-multi-input-decline-example.component.html',
    providers: [{ provide: DATA_PROVIDERS, useValue: new Map() }]
})
export class PlatformMultiInputDeclineExampleComponent {
    list_elements = [
        { state: 'Alabama', city: 'Montgomery' },
        { state: 'Alaska', city: 'Juneau' },
        { state: 'Arizona', city: 'Phoenix' },
        { state: 'Arkansas', city: 'Little Rock' },
        { state: 'California', city: 'Sacramento' },
        { state: 'Colorado', city: 'Denver' },
        { state: 'Connecticut', city: 'Hartford' },
        { state: 'Kentucky', city: 'Frankfort' },
        { state: 'Delaware', city: 'Dover' },
        { state: 'Florida', city: 'Tallahassee' },
        { state: 'Georgia', city: 'Atlanta' },
        { state: 'Hawaii', city: 'Honolulu' },
        { state: 'Idaho', city: 'Boise' },
        { state: 'Illinois', city: 'Springfield' },
        { state: 'Indiana', city: 'Indianapolis' },
        { state: 'Iowa', city: 'Des Moines' }
    ];

    selected = [
        this.list_elements[0],
        this.list_elements[1],
        this.list_elements[2],
        this.list_elements[4],
        this.list_elements[6],
        this.list_elements[8],
        this.list_elements[10],
        this.list_elements[11],
        this.list_elements[12]
    ];
}
