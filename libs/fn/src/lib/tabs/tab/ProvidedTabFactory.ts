import { TabComponent } from './tab.component';
import { ITab } from '../ITab';
import { NgZone, TemplateRef } from '@angular/core';

const zone_matcher = /__zone_symbol__(.*)(false|true)$/;

export function ProvidedTabFactory(tab: TabComponent, ngZone: NgZone): ITab {
    const disabled = Boolean(tab.disabled$?.fnDisabled);
    const nativeElement = tab.elementRef().nativeElement;
    const listeners = {};
    // eslint-disable-next-line guard-for-in
    for (const key in nativeElement) {
        const match = key.match(zone_matcher);
        if (match) {
            const zoneTasks = nativeElement[key];
            for (const zoneTask of zoneTasks) {
                // eslint-disable-next-line no-prototype-builtins
                if (!listeners.hasOwnProperty(zoneTask.eventName)) {
                    listeners[zoneTask.eventName] = [];
                }
                listeners[zoneTask.eventName].push(($event) => {
                    console.log({ $event });
                    zoneTask.callback($event);
                });
            }
        }
    }
    const iTab = {
        value: tab.identifier,
        titleTemplate: tab.titleTemplate,
        bodyTemplate: tab.bodyTemplate,
        disabled,
        selected: !disabled && tab.selected,
        selectedChange: (selected) => tab._stateChanges$.next({ selected }),
        tabInstance: tab,
        classes: tab.class || '',
        listeners
    };
    Object.defineProperty(iTab, 'titleTemplate', {
        get(): TemplateRef<void> {
            return tab.titleTemplate;
        }
    });
    Object.defineProperty(iTab, 'bodyTemplate', {
        get(): TemplateRef<void> {
            return tab.bodyTemplate;
        }
    });
    if (Object.keys(listeners).length > 0) {
        console.log({ listeners });
    }
    return iTab;
}
