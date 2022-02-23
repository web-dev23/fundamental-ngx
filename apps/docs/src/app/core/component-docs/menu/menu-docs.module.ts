import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuDocsComponent } from './menu-docs.component';
import {
    MenuAddonExampleComponent,
    MenuExampleComponent,
    MenuSeparatorExampleComponent
} from './examples/menu-examples.component';

import { MenuWithSubmenuExampleComponent } from './examples/menu-with-submenu-example.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { MenuModule } from '@fundamental-ngx/core/menu';
import { MenuMobileExampleComponent } from './examples/menu-mobile-example.component';

const routes: Routes = [
    {
        path: '',
        component: MenuHeaderComponent,
        children: [
            { path: '', component: MenuDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.menu } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, MenuModule],
    exports: [RouterModule],
    declarations: [
        MenuDocsComponent,
        MenuHeaderComponent,
        MenuExampleComponent,
        MenuAddonExampleComponent,
        MenuMobileExampleComponent,
        MenuSeparatorExampleComponent,
        MenuWithSubmenuExampleComponent
    ]
})
export class MenuDocsModule {}
