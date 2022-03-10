import { TabComponent } from './tab.component';
import { ITab } from '../ITab';
import { NgZone } from '@angular/core';

export function ProvidedTabFactory(tab: TabComponent, ngZone: NgZone): ITab {
    const disabled = Boolean(tab.disabled$?.fnDisabled);
    return {
        value: tab.identifier,
        titleTemplate: tab.titleTemplate,
        bodyTemplate: tab.bodyTemplate,
        disabled,
        selected: !disabled && tab.selected,
        selectedChange: (selected) => tab._stateChanges$.next({ selected }),
        nativeInteraction: (event: Event) => {
            const clonedEvent = new Event(event.type, {
                bubbles: true,
                cancelable: false,
                composed: true
            });

            ngZone.run(() => {
                tab.elementRef().nativeElement.dispatchEvent(clonedEvent);
            });
        },
        tabInstance: tab,
        classes: tab.class || ''
    };
}
