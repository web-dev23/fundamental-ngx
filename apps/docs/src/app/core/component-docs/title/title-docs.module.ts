import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { TitleDocsComponent } from './title-docs.component';
import {
    TitleElisionExampleComponent,
    TitleSemanticExampleComponent,
    TitleVisualExampleComponent,
    TitleWrappingExampleComponent
} from './examples/title-examples.component';
import { TitleModule } from '@fundamental-ngx/core/title';

const routes: Routes = [
    {
        path: '',
        component: TitleHeaderComponent,
        children: [
            { path: '', component: TitleDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.title } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, TitleModule],
    exports: [RouterModule],
    declarations: [
        TitleDocsComponent,
        TitleHeaderComponent,
        TitleSemanticExampleComponent,
        TitleElisionExampleComponent,
        TitleVisualExampleComponent,
        TitleWrappingExampleComponent
    ]
})
export class TitleDocsModule {}
