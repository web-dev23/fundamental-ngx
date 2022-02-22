import { Component, ViewEncapsulation } from '@angular/core';

import tabSrc from '!./examples/search-example/search-example.component.html?raw';
import { ExampleFile } from '@fundamental-ngx/docs/common/shared-utils';

@Component({
    selector: 'app-search',
    templateUrl: './search-docs.component.html',
    styleUrls: ['search-docs.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SearchDocsComponent {
    searchExample: ExampleFile[] = [
        {
            language: 'html',
            code: tabSrc,
            fileName: 'search-example'
        }
    ];
}
