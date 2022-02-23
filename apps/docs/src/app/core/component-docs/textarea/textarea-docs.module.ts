import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { TextareaHeaderComponent } from './textarea-header/textarea-header.component';
import { TextareaDocsComponent } from './textarea-docs.component';
import {
    TextareaExampleComponent,
    TextareaInlineHelpExampleComponent,
    TextareaStateExampleComponent
} from './examples/textarea-examples.component';
import { TextareaFormGroupExampleComponent } from './examples/textarea-form-group-example.component';
import { FormModule } from '@fundamental-ngx/core/form';
import { InlineHelpModule } from '@fundamental-ngx/core/inline-help';

const routes: Routes = [
    {
        path: '',
        component: TextareaHeaderComponent,
        children: [
            { path: '', component: TextareaDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.form } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, FormModule, InlineHelpModule],
    exports: [RouterModule],
    declarations: [
        TextareaDocsComponent,
        TextareaHeaderComponent,
        TextareaExampleComponent,
        TextareaStateExampleComponent,
        TextareaFormGroupExampleComponent,
        TextareaInlineHelpExampleComponent
    ]
})
export class TextareaDocsModule {}
