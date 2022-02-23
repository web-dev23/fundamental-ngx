import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import { GlobalConfigHeaderComponent } from './global-config-header/global-config-header.component';
import { GlobalConfigDocsComponent } from './global-config-docs.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';

const routes: Routes = [
    {
        path: '',
        component: GlobalConfigHeaderComponent,
        children: [
            { path: '', component: GlobalConfigDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.globalConfig } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule],
    exports: [RouterModule],
    declarations: [GlobalConfigDocsComponent, GlobalConfigHeaderComponent]
})
export class GlobalConfigDocsModule {}
