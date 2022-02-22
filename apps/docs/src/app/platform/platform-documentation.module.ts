import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MarkdownModule } from 'ngx-markdown';

import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { ROUTES } from './platform-documentation.routes';
import { PlatformDocumentationComponent } from './documentation/platform-documentation.component';
import { PlatformHomeComponent } from './component-docs/platform-home/platform-home.component';
import { NewComponentComponent } from './component-docs/new-component/new-component.component';
import { SchemaModule } from '@fundamental-ngx/docs/common/schema';
import { PLATFORM_COMPONENT_SCHEMAS } from './component-docs/schemas';
import {
    StackblitzService,
    DocsThemeService,
    SharedDocumentationModule
} from '@fundamental-ngx/docs/common/shared-utils';

@NgModule({
    declarations: [PlatformDocumentationComponent, PlatformHomeComponent, NewComponentComponent],
    imports: [
        ScrollingModule,
        AvatarModule,
        SharedDocumentationModule,
        MarkdownModule.forChild(),
        RouterModule.forChild(ROUTES),
        SchemaModule.forRoot(PLATFORM_COMPONENT_SCHEMAS)
    ],
    providers: [{ provide: 'CURRENT_LIB', useValue: 'platform' }, StackblitzService, DocsThemeService]
})
export class PlatformDocumentationModule {}
