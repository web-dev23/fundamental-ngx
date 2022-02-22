import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '../../api-files';
import { ButtonHeaderComponent } from './button-header/button-header.component';
import { ButtonDocsComponent } from './button-docs.component';
import {
    ButtonIconsExampleComponent,
    ButtonMenuExampleComponent,
    ButtonSizesExampleComponent,
    ButtonStateExampleComponent,
    ButtonTypesExampleComponent
} from './examples/button-examples.component';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { CarouselModule } from '@fundamental-ngx/core/carousel';

const routes: Routes = [
    {
        path: '',
        component: ButtonHeaderComponent,
        children: [
            { path: '', component: ButtonDocsComponent },
            {
                path: 'api',
                component: ApiComponent,
                data: { content: API_FILES.button }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, ButtonModule, CarouselModule],
    exports: [RouterModule],
    declarations: [
        ButtonDocsComponent,
        ButtonHeaderComponent,
        ButtonTypesExampleComponent,
        ButtonSizesExampleComponent,
        ButtonIconsExampleComponent,
        ButtonStateExampleComponent,
        ButtonMenuExampleComponent
    ]
})
export class ButtonDocsModule {}
