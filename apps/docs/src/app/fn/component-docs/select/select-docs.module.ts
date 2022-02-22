import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '../../api-files';
import { SelectHeaderComponent } from './select-header/select-header.component';
import { SelectDocsComponent } from './select-docs.component';
import { examples } from './examples';
import { SelectModule } from '@fundamental-ngx/fn/select';
import { FormModule } from '@fundamental-ngx/core/form';

const routes: Routes = [
    {
        path: '',
        component: SelectHeaderComponent,
        children: [
            {
                path: '',
                component: SelectDocsComponent
            },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.select } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, SelectModule, FormModule],
    exports: [RouterModule],
    declarations: [examples, SelectHeaderComponent, SelectDocsComponent]
})
export class SelectDocsModule {}
