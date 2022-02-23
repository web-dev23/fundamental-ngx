/* eslint-disable @nrwl/nx/enforce-module-boundaries */
// components // TODO(ds): e2e-refactor - move to lib

import { Schema } from '@fundamental-ngx/docs/common/schema';

import { ButtonDocsComponent } from './component-docs/button/button-docs.component';
import { AlertDocsComponent } from './component-docs/alert/alert-docs.component';
import { InputGroupDocsComponent } from './component-docs/input-group/input-group-docs.component';
import { PaginationDocsComponent } from './component-docs/pagination/pagination-docs.component';
import { TabsDocsComponent } from './component-docs/tabs/tabs-docs.component';
import { DialogDocsComponent } from './component-docs/dialog/dialog-docs.component';
import { MessageStripDocsComponent } from './component-docs/message-strip/message-strip-docs.component';
import { TableDocsComponent } from './component-docs/table/table-docs.component';
import { TimeDocsComponent } from './component-docs/time/time-docs.component';
import { SwitchDocsComponent } from './component-docs/switch/switch-docs.component';
import { SliderDocsComponent } from './component-docs/slider/slider-docs.component';

export const COMPONENT_SCHEMAS: { [name: string]: Schema } = {
    button: ButtonDocsComponent.schema,
    alert: AlertDocsComponent.schema,
    inputGroup: InputGroupDocsComponent.schema,
    pagination: PaginationDocsComponent.schema,
    messageStrip: MessageStripDocsComponent.schema,
    dialog: DialogDocsComponent.schema,
    tabs: TabsDocsComponent.schema,
    table: TableDocsComponent.schema,
    time: TimeDocsComponent.schema,
    switch: SwitchDocsComponent.schema,
    media: {
        properties: {
            image: {
                type: 'string'
            },
            alt: {
                type: 'string'
            }
        },
        type: 'object'
    },
    slider: SliderDocsComponent.schema
};
