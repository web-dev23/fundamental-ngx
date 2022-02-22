import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '../../api-files';

import { PlatformFeedInputHeaderComponent } from './platform-feed-input-header/platform-feed-input-header.component';
import { PlatformFeedInputExampleComponent } from './platform-feed-input-examples/platform-feed-input-example/platform-feed-input-example.component';
import { PlatformFeedInputDocsComponent } from './platform-feed-input-docs.component';

import { PlatformFeedInputModule } from '@fundamental-ngx/platform/feed-input';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { PlatformFeedInputPlaceholderExampleComponent } from './platform-feed-input-examples/platform-feed-input-placeholder-example/platform-feed-input-placeholder-example.component';
import { PlatformFeedInputNoAvatarExampleComponent } from './platform-feed-input-examples/platform-feed-input-no-avatar-example/platform-feed-input-no-avatar-example.component';
import { PlatformFeedInputDisabledExampleComponent } from './platform-feed-input-examples/platform-feed-input-disabled-example/platform-feed-input-disabled-example.component';
import { PlatformFeedInputMaxHeightExampleComponent } from './platform-feed-input-examples/platform-feed-input-max-height-example/platform-feed-input-max-height-example.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformFeedInputHeaderComponent,
        children: [
            { path: '', component: PlatformFeedInputDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.feedInput } }
        ]
    }
];

@NgModule({
    declarations: [
        PlatformFeedInputHeaderComponent,
        PlatformFeedInputDocsComponent,
        PlatformFeedInputExampleComponent,
        PlatformFeedInputPlaceholderExampleComponent,
        PlatformFeedInputNoAvatarExampleComponent,
        PlatformFeedInputDisabledExampleComponent,
        PlatformFeedInputMaxHeightExampleComponent
    ],
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, PlatformFeedInputModule],
    exports: [RouterModule]
})
export class PlatformFeedInputDocsModule {}
