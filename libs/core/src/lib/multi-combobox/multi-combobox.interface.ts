import { EventEmitter, InjectionToken } from '@angular/core';
import { MobileMode } from '@fundamental-ngx/core/mobile-mode';

export const MULTI_INPUT_COMPONENT = new InjectionToken<string[]>('MultiComboboxComponent');

/**
 * Multi Combobox Interface to have typing and avoid circular dependency between
 * MultiComboboxComponent <==> MultiComboboxMobileComponent
 */
export interface MultiComboboxInterface extends MobileMode {
    selected: any[];
    openChange: EventEmitter<boolean>;

    dialogApprove(): void;

    selectAllItems(): void;

    dialogDismiss(selectedBackup: any[]): void;
}
