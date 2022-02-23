import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { SegmentedButtonDocsComponent } from './segmented-button-docs.component';
import { SegmentedButtonHeaderComponent } from './segmented-button-header/segmented-button-header.component';
import { SegmentedButtonToggleExampleComponent } from './examples/segmented-button-toggle-example.component';
import { SegmentedButtonDefaultExampleComponent } from './examples/segmented-button-default-example.component';

import { SegmentedButtonFormExampleComponent } from './examples/segmented-button-form-example/segmented-button-form-example.component';
import { SegmentedButtonComplexExampleComponent } from './examples/segmented-button-complex-example/segmented-button-complex-example.component';
import { SegmentedButtonModule } from '@fundamental-ngx/core/segmented-button';
import { TextModule } from '@fundamental-ngx/core/text';

const routes: Routes = [
    {
        path: '',
        component: SegmentedButtonHeaderComponent,
        children: [
            { path: '', component: SegmentedButtonDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.segmentedButton } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, SegmentedButtonModule, TextModule],
    exports: [RouterModule],
    declarations: [
        SegmentedButtonDocsComponent,
        SegmentedButtonHeaderComponent,
        SegmentedButtonToggleExampleComponent,
        SegmentedButtonDefaultExampleComponent,
        SegmentedButtonFormExampleComponent,
        SegmentedButtonComplexExampleComponent
    ]
})
export class SegmentedButtonDocsModule {}
