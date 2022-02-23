import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { TreeDocsComponent } from './tree-docs.component';
import { TreeHeaderComponent } from './tree-header/tree-header.component';
import { SimpleTreeExampleComponent } from './examples/simple-tree-example.component';
import { TreeModule } from '@fundamental-ngx/core/tree';

const routes: Routes = [
    {
        path: '',
        component: TreeHeaderComponent,
        children: [
            { path: '', component: TreeDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.tree } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, TreeModule],
    exports: [RouterModule],
    declarations: [TreeDocsComponent, TreeHeaderComponent, SimpleTreeExampleComponent]
})
export class TreeDocsModule {}
