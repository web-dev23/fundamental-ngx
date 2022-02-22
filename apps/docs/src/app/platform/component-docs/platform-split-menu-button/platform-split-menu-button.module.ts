import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { API_FILES } from '../../api-files';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';

import { PlatformMenuModule } from '@fundamental-ngx/platform/menu';
import { PlatformSplitMenuButtonModule } from '@fundamental-ngx/platform/split-menu-button';
import { PlatformDocsSplitMenuButtonHeaderComponent } from './platform-split-menu-button-header/platform-split-menu-button-header.component';
import { PlatformDocsSplitMenuButtonComponent } from './platform-split-menu-button.component';
import { PlatformDocsSplitMenuButtonTypesComponent } from './platform-split-menu-button-examples/platform-split-button-types-example.component';
import { PlatformDocsSplitMenuButtonIconsComponent } from './platform-split-menu-button-examples/platform-split-button-icons-example.component';
import { PlatformDocsSplitMenuButtonBehaviorComponent } from './platform-split-menu-button-examples/platform-split-button-behaviors-example.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformDocsSplitMenuButtonHeaderComponent,
        children: [
            { path: '', component: PlatformDocsSplitMenuButtonComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.splitMenuButton } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PlatformSplitMenuButtonModule,
        PlatformMenuModule
    ],
    exports: [RouterModule],
    declarations: [
        PlatformDocsSplitMenuButtonComponent,
        PlatformDocsSplitMenuButtonHeaderComponent,
        PlatformDocsSplitMenuButtonBehaviorComponent,
        PlatformDocsSplitMenuButtonTypesComponent,
        PlatformDocsSplitMenuButtonIconsComponent
    ]
})
export class PlatformSplitMenuButtonDocsModule {}
