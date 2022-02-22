import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '../../api-files';
import { InputHeaderComponent } from './input-header/input-header.component';
import { InputDocsComponent } from './input-docs.component';
import { InputFormGroupExampleComponent } from './examples/input-form-group-example.component';
import { InputExampleComponent, InputStateExampleComponent } from './examples/input-examples.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { FormModule } from '@fundamental-ngx/fn/form';

const routes: Routes = [
    {
        path: '',
        component: InputHeaderComponent,
        children: [
            { path: '', component: InputDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.input } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, FormModule],
    exports: [RouterModule],
    declarations: [
        InputDocsComponent,
        InputHeaderComponent,
        InputExampleComponent,
        InputStateExampleComponent,
        InputFormGroupExampleComponent
    ]
})
export class InputDocsModule {}
