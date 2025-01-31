import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverModule } from '@fundamental-ngx/core/popover';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '@fundamental-ngx/core/menu';
import { PipeModule } from '@fundamental-ngx/core/utils';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { ListModule } from '@fundamental-ngx/core/list';
import { IconModule } from '@fundamental-ngx/core/icon';
import { AutoCompleteModule } from '@fundamental-ngx/core/utils';

import { ComboboxComponent } from './combobox.component';
import { ListGroupPipe } from './list-group.pipe';

@NgModule({
    declarations: [ComboboxComponent, ListGroupPipe],
    imports: [
        CommonModule,
        PopoverModule,
        FormsModule,
        MenuModule,
        PipeModule,
        ButtonModule,
        InputGroupModule,
        ListModule,
        IconModule,
        AutoCompleteModule
    ],
    exports: [ComboboxComponent, ListGroupPipe]
})
export class ComboboxModule {}
