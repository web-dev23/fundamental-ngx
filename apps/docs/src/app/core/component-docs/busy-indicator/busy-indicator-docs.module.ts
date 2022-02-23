import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { BusyIndicatorHeaderComponent } from './busy-indicator-header/busy-indicator-header.component';
import { BusyIndicatorDocsComponent } from './busy-indicator-docs.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { examples } from './examples';
import { BusyIndicatorModule } from '@fundamental-ngx/core/busy-indicator';
import { FormModule } from '@fundamental-ngx/core/form';

const routes: Routes = [
    {
        path: '',
        component: BusyIndicatorHeaderComponent,
        children: [
            { path: '', component: BusyIndicatorDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.busyIndicator } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, BusyIndicatorModule, FormModule],
    exports: [RouterModule],
    declarations: [examples, BusyIndicatorDocsComponent, BusyIndicatorHeaderComponent]
})
export class BusyIndicatorDocsModule {}
