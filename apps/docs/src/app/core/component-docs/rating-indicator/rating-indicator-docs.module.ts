import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import { RatingIndicatorDocsHeaderComponent } from './rating-indicator-docs-header/rating-indicator-docs-header.component';
import { RatingIndicatorDocsComponent } from './rating-indicator-docs.component';

import { examples } from './examples';
import { RatingIndicatorModule } from '@fundamental-ngx/core/rating-indicator';

const routes: Routes = [
    {
        path: '',
        component: RatingIndicatorDocsHeaderComponent,
        children: [
            { path: '', component: RatingIndicatorDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.ratingIndicator } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, RatingIndicatorModule],
    exports: [RouterModule],
    declarations: [RatingIndicatorDocsComponent, RatingIndicatorDocsHeaderComponent, ...examples]
})
export class RatingIndicatorDocsModule {}
