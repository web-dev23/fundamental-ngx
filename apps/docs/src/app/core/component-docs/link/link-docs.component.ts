import { Component } from '@angular/core';
import { ExampleFile } from '@fundamental-ngx/docs/common/shared-utils';
import linkH from '!./examples/link-example.component.html?raw';
import linkTs from '!./examples/link-example.component.ts?raw';

@Component({
    selector: 'app-icon',
    templateUrl: './link-docs.component.html'
})
export class LinkDocsComponent {
    link: ExampleFile[] = [
        {
            language: 'html',
            code: linkH,
            fileName: 'link-example'
        },
        {
            language: 'typescript',
            code: linkTs,
            fileName: 'link-example',
            component: 'LinkExampleComponent'
        }
    ];
}
