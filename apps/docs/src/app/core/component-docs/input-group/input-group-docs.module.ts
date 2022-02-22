import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '../../api-files';
import { InputGroupHeaderComponent } from './input-group-header/input-group-header.component';
import { InputGroupDocsComponent } from './input-group-docs.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { examples } from './examples';
import { FormModule } from '@fundamental-ngx/core/form';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';

const routes: Routes = [
    {
        path: '',
        component: InputGroupHeaderComponent,
        children: [
            { path: '', component: InputGroupDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.inputGroup } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, FormModule, InputGroupModule],
    exports: [RouterModule],
    declarations: [examples, InputGroupDocsComponent, InputGroupHeaderComponent]
})
export class InputGroupDocsModules {}
