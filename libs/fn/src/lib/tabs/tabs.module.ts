import 'focus-visible';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsListComponent } from './tabs-list.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';
import {
    ClickedBehaviorModule,
    DisabledBehaviorModule,
    FocusableListModule,
    ResizeBehaviorModule,
    SelectableListModule
} from '@fundamental-ngx/fn/cdk';
import { TabsListPostfixComponent } from './tabs-list-postfix/tabs-list-postfix.component';
import { TabDirective } from './tab.directive';
import { UtilsModule } from '@fundamental-ngx/fn/utils';
import { ButtonModule } from '@fundamental-ngx/fn/button';

@NgModule({
    declarations: [
        TabsListComponent,
        TabComponent,
        TabsComponent,
        TabContentDirective,
        TabTitleDirective,
        TabsListPostfixComponent,
        TabDirective
    ],
    imports: [
        CommonModule,
        DisabledBehaviorModule,
        FocusableListModule,
        SelectableListModule,
        ResizeBehaviorModule,
        ClickedBehaviorModule,
        ButtonModule,
        UtilsModule.withProviders()
    ],
    exports: [
        TabsListComponent,
        TabComponent,
        TabsComponent,
        TabContentDirective,
        TabTitleDirective,
        DisabledBehaviorModule,
        TabsListPostfixComponent,
        TabDirective
    ]
})
export class TabsModule {}
