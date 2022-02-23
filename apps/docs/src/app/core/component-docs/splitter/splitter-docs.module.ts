import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarModule } from '@fundamental-ngx/core/bar';

import { SplitterModule } from '@fundamental-ngx/core/splitter';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { SharedDocumentationModule } from '@fundamental-ngx/docs/common/shared-utils';

import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { COMPONENTS } from './examples';
import { SplitterDocsComponent } from './splitter-docs.component';
import { SplitterHeaderComponent } from './splitter-header/splitter-header.component';

const routes: Routes = [
    {
        path: '',
        component: SplitterHeaderComponent,
        children: [
            { path: '', component: SplitterDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.slider } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        SharedDocumentationPageModule,
        SplitterModule,
        BarModule
    ],
    exports: [RouterModule],
    declarations: [SplitterHeaderComponent, SplitterDocsComponent, ...COMPONENTS]
})
export class SplitterDocsModule {}
