import { Component } from '@angular/core';
import { DocumentationBaseComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { components, guides, sections } from './fn-documentation-data';

@Component({
    selector: 'fn-documentation',
    styleUrls: ['./fn-documentation.component.scss'],
    templateUrl: './fn-documentation.component.html'
})
export class CoreDocumentationComponent extends DocumentationBaseComponent {
    guides = guides;
    components = components;
    sections = sections;
}
