import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '../../api-files';
import { ProductSwitchSmallExampleComponent } from './examples/product-switch-small-example.component';
import { ProductSwitchDndExampleComponent } from './examples/product-switch-dnd-example.component';
import { ProductSwitchDocsHeaderComponent } from './product-switch-docs-header/product-switch-docs-header.component';
import { ProductSwitchListComponent } from './examples/product-switch-list/product-switch-list-example.component';
import { ProductSwitchDocsComponent } from './product-switch-docs.component';
import { ProductSwitchModule } from '@fundamental-ngx/core/product-switch';
import { ShellbarModule } from '@fundamental-ngx/core/shellbar';

const routes: Routes = [
    {
        path: '',
        component: ProductSwitchDocsHeaderComponent,
        children: [
            { path: '', component: ProductSwitchDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.productSwitch } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, ProductSwitchModule, ShellbarModule],
    exports: [RouterModule],
    declarations: [
        ProductSwitchDocsComponent,
        ProductSwitchListComponent,
        ProductSwitchDocsHeaderComponent,
        ProductSwitchDndExampleComponent,
        ProductSwitchSmallExampleComponent
    ]
})
export class ProductSwitchDocsModule {}
