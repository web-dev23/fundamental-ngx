import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { PlatformMenuModule } from '@fundamental-ngx/platform/menu';

import { API_FILES } from '../../api-files';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { PlatformMenuHeaderComponent } from './platform-menu-header/platform-menu-header.component';
import { PlatformMenuDocsComponent } from './platform-menu-docs.component';
import { PlatformMenuBasicExampleComponent } from './platform-menu-examples/platform-menu-basic-example.component';
import { PlatformMenuCascadeExampleComponent } from './platform-menu-examples/platform-menu-cascade-example.component';
import { PlatformMenuScrollingExampleComponent } from './platform-menu-examples/platform-menu-scrolling-example.component';
import { PlatformMenuXPositionExampleComponent } from './platform-menu-examples/platform-menu-x-position-example.component';
import { PlatformMenuWithIconsExampleComponent } from './platform-menu-examples/platform-menu-with-icons-example.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformMenuHeaderComponent,
        children: [
            { path: '', component: PlatformMenuDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.menu } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PlatformMenuModule,
        ButtonModule,
        AvatarModule,
        ScrollingModule
    ],
    exports: [RouterModule],
    declarations: [
        PlatformMenuDocsComponent,
        PlatformMenuHeaderComponent,
        PlatformMenuBasicExampleComponent,
        PlatformMenuCascadeExampleComponent,
        PlatformMenuScrollingExampleComponent,
        PlatformMenuXPositionExampleComponent,
        PlatformMenuWithIconsExampleComponent
    ]
})
export class PlatformMenuDocsModule {}
