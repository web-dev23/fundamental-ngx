import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListModule } from '@fundamental-ngx/core/list';
import { FormModule } from '@fundamental-ngx/core/form';
import { ComboboxModule } from '@fundamental-ngx/core/combobox';

import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { ComboboxHeaderComponent } from './combobox-header/combobox-header.component';
import { ComboboxDocsComponent } from './combobox-docs.component';
import { examples } from './examples';
import { ComboboxBylineExampleComponent } from './examples/combobox-byline-example.component';

const routes: Routes = [
    {
        path: '',
        component: ComboboxHeaderComponent,
        children: [
            { path: '', component: ComboboxDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.combobox } }
        ]
    }
];

@NgModule({
    imports: [ListModule, FormModule, ComboboxModule, RouterModule.forChild(routes), SharedDocumentationPageModule],
    exports: [RouterModule],
    declarations: [examples, ComboboxDocsComponent, ComboboxHeaderComponent, ComboboxBylineExampleComponent]
})
export class ComboboxDocsModule {}
