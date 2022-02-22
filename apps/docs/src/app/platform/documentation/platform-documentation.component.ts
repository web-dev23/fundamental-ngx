import { Component } from '@angular/core';
import { DocumentationBaseComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { guides, components, layouts, utilities, sections } from './platform-documentation-data';
@Component({
    selector: 'platform-documentation',
    styleUrls: ['./platform-documentation.component.scss'],
    templateUrl: './platform-documentation.component.html'
})
export class PlatformDocumentationComponent extends DocumentationBaseComponent {
    guides = guides;
    components = components;
    layouts = layouts;
    utilities = utilities;
    sections = sections;
}
