import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import { SharedDocumentationModule } from '@fundamental-ngx/docs/common/shared-utils';

import { COMPONENTS } from './examples';
import { SliderDocsComponent } from './slider-docs.component';
import { SliderHeaderComponent } from './slider-header/slider-header.component';
import { SliderModule } from '@fundamental-ngx/core/slider';

const routes: Routes = [
    {
        path: '',
        component: SliderHeaderComponent,
        children: [
            { path: '', component: SliderDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.slider } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        SharedDocumentationPageModule,
        SliderModule,
        FormsModule
    ],
    exports: [RouterModule],
    declarations: [SliderHeaderComponent, SliderDocsComponent, ...COMPONENTS]
})
export class SliderDocsModule {}
