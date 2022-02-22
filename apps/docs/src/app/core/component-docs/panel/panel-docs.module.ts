import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '../../api-files';
import { PanelDocsHeaderComponent } from './panel-docs-header/panel-docs-header.component';
import { PanelDocsComponent } from './panel-docs.component';
import { PanelExpandableExampleComponent } from './examples/panel-expandable-examples.component';
import { PanelFixedExampleComponent } from './examples/panel-fixed-example.component';
import { PanelCompactExampleComponent } from './examples/panel-compact-example.component';
import { PanelFixedHeightExampleComponent } from './examples/panel-fixed-height-example.component';
import { PanelModule } from '@fundamental-ngx/core/panel';

const routes: Routes = [
    {
        path: '',
        component: PanelDocsHeaderComponent,
        children: [
            { path: '', component: PanelDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.panel } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, PanelModule],
    exports: [RouterModule],
    declarations: [
        PanelDocsComponent,
        PanelExpandableExampleComponent,
        PanelDocsHeaderComponent,
        PanelFixedExampleComponent,
        PanelCompactExampleComponent,
        PanelFixedHeightExampleComponent
    ]
})
export class PanelDocsModule {}
