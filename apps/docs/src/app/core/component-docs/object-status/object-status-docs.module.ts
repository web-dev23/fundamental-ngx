import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { ObjectStatusDocsComponent } from './object-status-docs.component';
import {
    ObjectStatusTextExampleComponent,
    ObjectStatusTextIconExampleComponent,
    ObjectStatusClickableAndIconExampleComponent,
    ObjectStatusGenericExampleComponent,
    ObjectStatusInvertedGenericTextExampleComponent,
    ObjectStatusInvertedTextExampleComponent,
    ObjectStatusLargeExampleComponent
} from './examples/object-status-examples.component';
import { ObjectStatusHeaderComponent } from './object-status-header/object-status-header.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { ObjectStatusModule } from '@fundamental-ngx/core/object-status';
import { ObjectStatusDefaultExampleComponent } from './examples/object-status-default-example.component';

const routes: Routes = [
    {
        path: '',
        component: ObjectStatusHeaderComponent,
        children: [
            { path: '', component: ObjectStatusDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.objectStatus } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, ObjectStatusModule],
    exports: [RouterModule],
    declarations: [
        ObjectStatusDocsComponent,
        ObjectStatusHeaderComponent,
        ObjectStatusDefaultExampleComponent,
        ObjectStatusTextExampleComponent,
        ObjectStatusTextIconExampleComponent,
        ObjectStatusClickableAndIconExampleComponent,
        ObjectStatusGenericExampleComponent,
        ObjectStatusInvertedGenericTextExampleComponent,
        ObjectStatusInvertedTextExampleComponent,
        ObjectStatusLargeExampleComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ObjectStatusDocsModule {}
