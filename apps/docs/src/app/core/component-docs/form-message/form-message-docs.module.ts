import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '../../api-files';
import { FormMessageHeaderComponent } from './form-message-header/form-message-header.component';
import { FormMessageDocsComponent } from './form-message-docs.component';
import { FormMessageExampleComponent } from './examples/form-message-example.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { FormModule } from '@fundamental-ngx/core/form';
import { PopoverModule } from '@fundamental-ngx/core/popover';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { MultiInputModule } from '@fundamental-ngx/core/multi-input';

const routes: Routes = [
    {
        path: '',
        component: FormMessageHeaderComponent,
        children: [
            { path: '', component: FormMessageDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.form } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        FormModule,
        PopoverModule,
        InputGroupModule,
        MultiInputModule
    ],
    exports: [RouterModule],
    declarations: [FormMessageDocsComponent, FormMessageHeaderComponent, FormMessageExampleComponent]
})
export class FormMessageDocsModule {}
