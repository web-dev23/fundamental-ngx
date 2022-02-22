import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '../../api-files';

import { GridListDocsComponent } from './grid-list-docs.component';
import { GridListHeaderComponent } from './grid-list-header/grid-list-header.component';
import { COMPONENTS } from './examples';
import { GridListModule } from '@fundamental-ngx/core/grid-list';
import { DragAndDropModule } from '@fundamental-ngx/core/utils';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { LinkModule } from '@fundamental-ngx/core/link';
import { TitleModule } from '@fundamental-ngx/core/title';
import { ButtonModule } from '@fundamental-ngx/core/button';

const routes: Routes = [
    {
        path: '',
        component: GridListHeaderComponent,
        children: [
            { path: '', component: GridListDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.gridList } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        GridListModule,
        DragAndDropModule,
        AvatarModule,
        LinkModule,
        TitleModule,
        ButtonModule
    ],
    exports: [RouterModule],
    declarations: [GridListDocsComponent, GridListHeaderComponent, ...COMPONENTS]
})
export class GridListDocsModule {}
