import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import {
    BreadcrumbHrefExampleComponent,
    BreadcrumbResponsiveExampleComponent,
    BreadcrumbRouterLinkExampleComponent
} from './examples/breadcrumb-examples.component';
import { BreadcrumbHeaderComponent } from './breadcrumb-header/breadcrumb-header.component';
import { BreadcrumbDocsComponent } from './breadcrumb-docs.component';
import { BreadcrumbModule } from '@fundamental-ngx/core/breadcrumb';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';

const routes: Routes = [
    {
        path: '',
        component: BreadcrumbHeaderComponent,
        children: [
            { path: '', component: BreadcrumbDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.breadcrumb } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, BreadcrumbModule],
    exports: [RouterModule],
    declarations: [
        BreadcrumbDocsComponent,
        BreadcrumbHeaderComponent,
        BreadcrumbHrefExampleComponent,
        BreadcrumbRouterLinkExampleComponent,
        BreadcrumbResponsiveExampleComponent
    ]
})
export class BreadcrumbDocsModule {}
