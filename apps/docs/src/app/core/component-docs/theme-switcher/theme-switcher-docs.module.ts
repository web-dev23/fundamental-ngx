import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { ThemeSwitcherHeaderComponent } from './theme-switcher-header/theme-switcher-header.component';
import { ThemeSwitcherDocsComponent } from './theme-switcher-docs.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { examples } from './examples';
import { ObjectStatusModule } from '@fundamental-ngx/core/object-status';
import { ThemesService } from '@fundamental-ngx/core/utils';

const routes: Routes = [
    {
        path: '',
        component: ThemeSwitcherHeaderComponent,
        children: [
            { path: '', component: ThemeSwitcherDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.globalConfig } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, ObjectStatusModule],
    exports: [RouterModule],
    declarations: [ThemeSwitcherDocsComponent, ThemeSwitcherHeaderComponent, examples],
    providers: [ThemesService]
})
export class ThemeSwitcherDocsModule {}
