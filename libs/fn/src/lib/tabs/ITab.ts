import { TemplateRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

export interface ITab {
    value: string;
    titleTemplate: TemplateRef<void>;
    bodyTemplate: TemplateRef<void>;
    disabled: boolean;
    selected?: boolean;
    selectedChange: (selected: boolean) => void;
    tabInstance: TabComponent;
    classes: string;
    listeners: Record<string, Array<(...args: any) => void>>;
}
