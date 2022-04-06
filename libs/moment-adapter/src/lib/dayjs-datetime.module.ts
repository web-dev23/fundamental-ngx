import { NgModule } from '@angular/core';
import { DATE_TIME_FORMATS, DatetimeAdapter } from '@fundamental-ngx/core/datetime';

import { DayjsDatetimeAdapter } from './dayjs-datetime-adapter';
import { DAYJS_DATETIME_FORMATS } from './dayjs-datetime-formats';

@NgModule({
    providers: [{ provide: DatetimeAdapter, useClass: DayjsDatetimeAdapter }]
})
export class DayjsDatetimeAdapterModule {}

@NgModule({
    imports: [DayjsDatetimeAdapterModule],
    providers: [{ provide: DATE_TIME_FORMATS, useValue: DAYJS_DATETIME_FORMATS }]
})
export class DayjsDatetimeModule {}
