import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { ShellbarDocsHeaderComponent } from './shellbar-docs-header/shellbar-docs-header.component';
import { ShellbarDocsComponent } from './shellbar-docs.component';
import { ShellbarBasicExampleComponent } from './examples/shellbar-basic-example.component';
import { ShellbarSideNavExampleComponent } from './examples/shellbar-side-nav/shellbar-side-nav-example.component';
import { ShellbarCollapsibleExampleComponent } from './examples/shellbar-collapsible-example.component';
import { ShellbarModule } from '@fundamental-ngx/core/shellbar';
import { ComboboxModule } from '@fundamental-ngx/core/combobox';
import { SideNavigationModule } from '@fundamental-ngx/core/side-navigation';
import { ProductSwitchModule } from '@fundamental-ngx/core/product-switch';
import { TileModule } from '@fundamental-ngx/core/tile';
import { LayoutPanelModule } from '@fundamental-ngx/core/layout-panel';
import { SegmentedButtonModule } from '@fundamental-ngx/core/segmented-button';
import { ShellbarSideNavResponsiveExampleComponent } from './examples/shellbar-side-nav-responsive/shellbar-side-nav-responsive-example.component';

const routes: Routes = [
    {
        path: '',
        component: ShellbarDocsHeaderComponent,
        children: [
            { path: '', component: ShellbarDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.shellbar } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        ShellbarModule,
        ComboboxModule,
        SideNavigationModule,
        ProductSwitchModule,
        TileModule,
        LayoutPanelModule,
        SegmentedButtonModule
    ],
    exports: [RouterModule],
    declarations: [
        ShellbarDocsComponent,
        ShellbarDocsHeaderComponent,
        ShellbarBasicExampleComponent,
        ShellbarSideNavExampleComponent,
        ShellbarCollapsibleExampleComponent,
        ShellbarSideNavResponsiveExampleComponent
    ]
})
export class ShellbarDocsModule {}
