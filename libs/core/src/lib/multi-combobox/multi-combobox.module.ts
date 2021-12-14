import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiComboboxComponent } from './multi-combobox.component';
import { TokenModule } from '@fundamental-ngx/core/token';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from '@fundamental-ngx/core/popover';
import { PipeModule } from '@fundamental-ngx/core/utils';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { FormModule } from '@fundamental-ngx/core/form';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { ListModule } from '@fundamental-ngx/core/list';
import { LinkModule } from '@fundamental-ngx/core/link';
import { AutoCompleteModule } from '@fundamental-ngx/core/utils';

@NgModule({
    declarations: [MultiComboboxComponent],
    imports: [
        CommonModule,
        TokenModule,
        FormsModule,
        ListModule,
        PopoverModule,
        PipeModule,
        InputGroupModule,
        FormModule,
        CheckboxModule,
        LinkModule,
        AutoCompleteModule
    ],
    exports: [MultiComboboxComponent]
})
export class MultiComboboxModule {}
