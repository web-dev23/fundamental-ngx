import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/component-docs/core/core-main';
import { InfiniteScrollHeaderComponent } from './infinite-scroll-header/infinite-scroll-header.component';
import { InfiniteScrollDocsComponent } from './infinite-scroll-docs.component';
import { InfiniteScrollBasicExampleComponent } from './examples/infinite-scroll-basic-example/infinite-scroll-basic-example.component';

import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { InfiniteScrollModule } from '@fundamental-ngx/core/infinite-scroll';

const routes: Routes = [
    {
        path: '',
        component: InfiniteScrollHeaderComponent,
        children: [
            { path: '', component: InfiniteScrollDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.infiniteScroll } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, InfiniteScrollModule],
    exports: [RouterModule],
    declarations: [InfiniteScrollDocsComponent, InfiniteScrollHeaderComponent, InfiniteScrollBasicExampleComponent]
})
export class InfiniteScrollDocsModule {}
