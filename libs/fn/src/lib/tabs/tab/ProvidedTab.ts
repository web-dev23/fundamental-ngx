import { TemplateRef } from '@angular/core';
import { ITab } from '../ITab';
import { TabComponent } from './tab.component';

export abstract class ProvidedTab implements ITab {
    bodyTemplate: TemplateRef<void>;
    disabled: boolean;
    selected: boolean;
    titleTemplate: TemplateRef<void>;
    value: string;
    classes: string;
    abstract selectedChange: (selected: boolean) => void;
    abstract nativeInteraction: (event: Event) => void;
    abstract tabInstance: TabComponent;
}
