import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { API_FILES } from '../../api-files';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';

import { PlatformThumbnailModule } from '@fundamental-ngx/platform/thumbnail';
import { PlatformThumbnailDocsComponent } from './platform-thumbnail.docs.component';
import { PlatformThumbnailHeaderComponent } from './platform-thumbnail-header/platform-thumbnail-header.component';
import { PlatformThumbnailBasicExampleComponent } from './platform-thumbnail-examples/platform-thumbnail-basic-example.component';
import { PlatformThumbnailHorizontalExampleComponent } from './platform-thumbnail-examples/platform-thumbnail-horizontal-example.component';
import { PlatformThumbnailVideoMediaExampleComponent } from './platform-thumbnail-examples/platform-thumbnail-video-media-example.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformThumbnailHeaderComponent,
        children: [
            { path: '', component: PlatformThumbnailDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.thumbnail } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedDocumentationPageModule, PlatformThumbnailModule],
    exports: [RouterModule],
    declarations: [
        PlatformThumbnailDocsComponent,
        PlatformThumbnailHeaderComponent,
        PlatformThumbnailBasicExampleComponent,
        PlatformThumbnailHorizontalExampleComponent,
        PlatformThumbnailVideoMediaExampleComponent
    ]
})
export class PlatformThumbnailDocsModule {}
