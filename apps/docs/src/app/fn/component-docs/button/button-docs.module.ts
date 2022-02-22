import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '../../api-files';
import { ButtonHeaderComponent } from './button-header/button-header.component';
import { ButtonDocsComponent } from './button-docs.component';
import { examples } from './examples';
import { ButtonModule } from '@fundamental-ngx/fn/button';

const routes: Routes = [
    {
        path: '',
        component: ButtonHeaderComponent,
        children: [
            {
                path: '',
                component: ButtonDocsComponent
            },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.button } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, ButtonModule],
    exports: [RouterModule],
    declarations: [examples, ButtonHeaderComponent, ButtonDocsComponent]
})
export class ButtonDocsModule {}
