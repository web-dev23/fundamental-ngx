import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionSheetModule } from '@fundamental-ngx/core/action-sheet';
import { ActionSheetHeaderComponent } from './action-sheet-header/action-sheet-header.component';
import { ActionSheetDocsComponent } from './action-sheet-docs.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { examples } from './examples';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
const routes: Routes = [
    {
        path: '',
        component: ActionSheetHeaderComponent,
        children: [
            { path: '', component: ActionSheetDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.actionSheet } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, ActionSheetModule],
    exports: [RouterModule],
    declarations: [ActionSheetDocsComponent, ActionSheetHeaderComponent, examples]
})
export class ActionSheetDocsModule {}
