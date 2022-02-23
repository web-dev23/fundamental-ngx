import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import { DialogDocsHeaderComponent } from './dialog-docs-header/dialog-docs-header.component';
import { DialogDocsComponent } from './dialog-docs.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import {
    examples,
    DialogExampleComponent,
    DialogStackedExampleComponent,
    FirstDialogExampleComponent,
    SecondDialogExampleComponent
} from './examples';
import { A11yModule } from '@angular/cdk/a11y';
import { FormModule } from '@fundamental-ngx/core/form';
import { ListModule } from '@fundamental-ngx/core/list';
import { DialogModule, DialogService } from '@fundamental-ngx/core/dialog';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { MultiInputModule } from '@fundamental-ngx/core/multi-input';
import {
    DialogInnerPopoverComponent,
    DialogInnerPopoverExampleComponent
} from './examples/dialog-inner-popover/dialog-inner-popover.component';

const routes: Routes = [
    {
        path: '',
        component: DialogDocsHeaderComponent,
        children: [
            { path: '', component: DialogDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.dialog } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        FormModule,
        ListModule,
        DialogModule,
        InputGroupModule,
        A11yModule,
        MultiInputModule,
        CheckboxModule
    ],
    exports: [RouterModule],
    declarations: [
        examples,
        DialogDocsComponent,
        DialogDocsHeaderComponent,
        DialogInnerPopoverComponent,
        DialogInnerPopoverExampleComponent
    ],
    entryComponents: [
        DialogExampleComponent,
        FirstDialogExampleComponent,
        SecondDialogExampleComponent,
        DialogStackedExampleComponent,
        DialogInnerPopoverExampleComponent
    ],
    providers: [DialogService]
})
export class DialogDocsModule {}
