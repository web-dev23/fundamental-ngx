import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { MultiComboboxHeaderComponent } from './multi-combobox-header/multi-combobox-header.component';
import { MultiComboboxDocsComponent } from './multi-combobox-docs.component';
import { MultiComboboxAsyncExampleComponent } from './examples/multi-combobox-async-example/multi-combobox-async-example.component';
import { MultiComboboxDisplaywithExampleComponent } from './examples/multi-combobox-displaywith-example/multi-combobox-displaywith-example.component';
import { MultiComboboxExampleComponent } from './examples/multi-combobox-example/multi-combobox-example.component';
import { MultiComboboxFilterExampleComponent } from './examples/multi-combobox-filter-example/multi-combobox-filter-example.component';
import { MultiComboboxFormExampleComponent } from './examples/multi-combobox-form-example/multi-combobox-form-example.component';
import { MultiComboboxCompactExampleComponent } from './examples/multi-combobox-compact-example/multi-combobox-compact-example.component';
import { MultiComboboxNewTokensExampleComponent } from './examples/multi-combobox-new-tokens-example/multi-combobox-new-tokens-example.component';
import { MultiComboboxMobileExampleComponent } from './examples/multi-combobox-mobile-example/multi-combobox-mobile-example.component';
import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';
import { MultiComboboxIncludesExampleComponent } from './examples/multi-combobox-includes-example/multi-combobox-includes-example.component';
import { MultiComboboxCustomItemExampleComponent } from './examples/multi-combobox-custom-item-example/multi-combobox-custom-item-example.component';
import { FormModule } from '@fundamental-ngx/core/form';
import { MultiComboboxModule } from '@fundamental-ngx/core/multi-combobox';
import { IconModule } from '@fundamental-ngx/core/icon';
import { ListModule } from '@fundamental-ngx/core/list';

const routes: Routes = [
    {
        path: '',
        component: MultiComboboxHeaderComponent,
        children: [
            { path: '', component: MultiComboboxDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.multiCombobox } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        FormModule,
        MultiComboboxModule,
        ListModule,
        IconModule
    ],
    exports: [RouterModule],
    declarations: [
        MultiComboboxDocsComponent,
        MultiComboboxHeaderComponent,
        MultiComboboxExampleComponent,
        MultiComboboxFormExampleComponent,
        MultiComboboxAsyncExampleComponent,
        MultiComboboxFilterExampleComponent,
        MultiComboboxDisplaywithExampleComponent,
        MultiComboboxCompactExampleComponent,
        MultiComboboxNewTokensExampleComponent,
        MultiComboboxMobileExampleComponent,
        MultiComboboxIncludesExampleComponent,
        MultiComboboxCustomItemExampleComponent
    ]
})
export class MultiComboboxDocsModule {}
