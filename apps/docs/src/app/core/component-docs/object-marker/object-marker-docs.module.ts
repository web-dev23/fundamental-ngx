import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectMarkerDocsComponent } from './object-marker-docs.component';
import { ObjectMarkerHeaderComponent } from './object-marker-header/object-marker-header.component';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import {
    ObjectMarkerExampleComponent,
    ObjectMarkerIconAndTextExampleComponent,
    ObjectMarkerTextExampleComponent
} from './examples/object-marker-example.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { ObjectMarkerClickableExampleComponent } from './examples/object-marker-clickable-example.component';
import { ObjectMarkerModule } from '@fundamental-ngx/core/object-marker';

const routes: Routes = [
    {
        path: '',
        component: ObjectMarkerHeaderComponent,
        children: [
            { path: '', component: ObjectMarkerDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.objectMarker } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), ObjectMarkerModule, SharedDocumentationPageModule],
    exports: [RouterModule],
    declarations: [
        ObjectMarkerDocsComponent,
        ObjectMarkerHeaderComponent,
        ObjectMarkerExampleComponent,
        ObjectMarkerIconAndTextExampleComponent,
        ObjectMarkerClickableExampleComponent,
        ObjectMarkerTextExampleComponent
    ]
})
export class ObjectMarkerDocsModule {}
