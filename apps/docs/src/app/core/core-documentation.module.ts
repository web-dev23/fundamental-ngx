// TODO(ds): e2e-refactor - move to lib
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MarkdownModule } from 'ngx-markdown';

import { ROUTES } from './core-documentation.routes';
import {
    CoreDocumentationComponent,
    HomeDocsComponent,
    NewComponentComponent
} from '@fundamental-ngx/docs/core/core-main';
import { MOBILE_MODE_CONFIG } from '@fundamental-ngx/core/mobile-mode';
import {
    DocsThemeService,
    COMBOBOX_MOBILE_CONFIG,
    MENU_MOBILE_CONFIG,
    MULTI_INPUT_MOBILE_CONFIG,
    POPOVER_MOBILE_CONFIG,
    SEARCH_FIELD_MOBILE_CONFIG,
    SELECT_MOBILE_CONFIG,
    StackblitzService,
    SharedDocumentationModule
} from '@fundamental-ngx/docs/common/shared-utils';
import { SchemaModule } from '@fundamental-ngx/docs/common/schema';
import { COMPONENT_SCHEMAS } from './schemas';

@NgModule({
    declarations: [HomeDocsComponent, NewComponentComponent, CoreDocumentationComponent],
    imports: [
        SharedDocumentationModule,
        SchemaModule.forRoot(COMPONENT_SCHEMAS),
        MarkdownModule.forChild(),
        RouterModule.forChild(ROUTES),
        ScrollingModule
    ],
    providers: [
        StackblitzService,
        DocsThemeService,
        { provide: 'CURRENT_LIB', useValue: 'core' },
        { provide: MOBILE_MODE_CONFIG, useValue: MENU_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: SELECT_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: COMBOBOX_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: MULTI_INPUT_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: POPOVER_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: SEARCH_FIELD_MOBILE_CONFIG, multi: true }
    ]
})
export class CoreDocumentationModule {}
