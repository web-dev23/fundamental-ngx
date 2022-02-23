import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { MessagePageDocsComponent } from './message-page-docs.component';
import { MessagePageHeaderComponent } from './message-page-header/message-page-header.component';
import { MessagePageFilterExampleComponent } from './examples/message-page-examples.component';
import { MessagePageSearchExampleComponent } from './examples/message-page-examples.component';
import { MessagePageNoItemsExampleComponent } from './examples/message-page-examples.component';
import { MessagePageErrorExampleComponent } from './examples/message-page-examples.component';
import { MessagePageActionsExampleComponent } from './examples/message-page-examples.component';
import { MessagePageCustomIconExampleComponent } from './examples/message-page-examples.component';
import { MessagePageNoIconExampleComponent } from './examples/message-page-examples.component';

import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { MessagePageModule } from '@fundamental-ngx/core/message-page';
import { LinkModule } from '@fundamental-ngx/core/link';

const routes: Routes = [
    {
        path: '',
        component: MessagePageHeaderComponent,
        children: [
            { path: '', component: MessagePageDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.messagePage } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, MessagePageModule, LinkModule],
    exports: [RouterModule],
    declarations: [
        MessagePageHeaderComponent,
        MessagePageDocsComponent,
        MessagePageFilterExampleComponent,
        MessagePageSearchExampleComponent,
        MessagePageNoItemsExampleComponent,
        MessagePageErrorExampleComponent,
        MessagePageActionsExampleComponent,
        MessagePageCustomIconExampleComponent,
        MessagePageNoIconExampleComponent
    ]
})
export class MessagePageDocsModule {}
