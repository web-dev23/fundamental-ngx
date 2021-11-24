import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { MultiInputHeaderComponent } from './multi-combobox-header/multi-combobox-header.component';
import { MultiInputDocsComponent } from './multi-combobox-docs.component';
import { MultiInputAsyncExampleComponent } from './examples/multi-combobox-async-example/multi-combobox-async-example.component';
import { MultiInputDisplaywithExampleComponent } from './examples/multi-combobox-displaywith-example/multi-combobox-displaywith-example.component';
import { MultiInputExampleComponent } from './examples/multi-combobox-example/multi-combobox-example.component';
import { MultiInputFilterExampleComponent } from './examples/multi-combobox-filter-example/multi-combobox-filter-example.component';
import { MultiInputFormExampleComponent } from './examples/multi-combobox-form-example/multi-combobox-form-example.component';
import { MultiInputCompactExampleComponent } from './examples/multi-combobox-compact-example/multi-combobox-compact-example.component';
import { MultiInputNewTokensExampleComponent } from './examples/multi-combobox-new-tokens-example/multi-combobox-new-tokens-example.component';
import { MultiInputMobileExampleComponent } from './examples/multi-combobox-mobile-example/multi-combobox-mobile-example.component';
import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';
import { MultiInputIncludesExampleComponent } from './examples/multi-combobox-includes-example/multi-combobox-includes-example.component';
import { MultiInputCustomItemExampleComponent } from './examples/multi-combobox-custom-item-example/multi-combobox-custom-item-example.component';
import { FormModule } from '@fundamental-ngx/core/form';
import { MultiInputModule } from '@fundamental-ngx/core/multi-combobox';
import { IconModule } from '@fundamental-ngx/core/icon';
import { ListModule } from '@fundamental-ngx/core/list';

const routes: Routes = [
    {
        path: '',
        component: MultiInputHeaderComponent,
        children: [
            { path: '', component: MultiInputDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.multiInput } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        FormModule,
        MultiInputModule,
        ListModule,
        IconModule
    ],
    exports: [RouterModule],
    declarations: [
        MultiInputDocsComponent,
        MultiInputHeaderComponent,
        MultiInputExampleComponent,
        MultiInputFormExampleComponent,
        MultiInputAsyncExampleComponent,
        MultiInputFilterExampleComponent,
        MultiInputDisplaywithExampleComponent,
        MultiInputCompactExampleComponent,
        MultiInputNewTokensExampleComponent,
        MultiInputMobileExampleComponent,
        MultiInputIncludesExampleComponent,
        MultiInputCustomItemExampleComponent
    ]
})
export class MultiInputDocsModule {}
