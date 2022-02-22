import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '../../api-files';
import { TagHeaderComponent } from './tag-header/tag-header.component';
import { TagDocsComponent } from './tag-docs.component';
import { examples } from './examples';
import { TagModule } from '@fundamental-ngx/fn/tag';
import { CheckboxModule } from '@fundamental-ngx/fn/checkbox';
import { RadioButtonModule } from '@fundamental-ngx/fn/radio';
import { FormModule } from '@fundamental-ngx/fn/form';
import { SwitchModule } from '@fundamental-ngx/fn/switch';
import { ButtonModule } from '@fundamental-ngx/fn/button';
import { SearchModule } from '@fundamental-ngx/fn/search';

const routes: Routes = [
    {
        path: '',
        component: TagHeaderComponent,
        children: [
            {
                path: '',
                component: TagDocsComponent
            },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.tabs } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        TagModule,
        CheckboxModule,
        RadioButtonModule,
        FormModule,
        SwitchModule,
        ButtonModule,
        SearchModule
    ],
    exports: [RouterModule],
    declarations: [examples, TagHeaderComponent, TagDocsComponent]
})
export class TagDocsModule {}
