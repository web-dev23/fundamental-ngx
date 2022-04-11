import { Component, LOCALE_ID, ViewChild } from '@angular/core';
import {
    DayjsDatetimeAdapter,
    DAYJS_DATETIME_FORMATS,
    loadLocales
} from '@fundamental-ngx/datetime-adapter';
import { DATE_TIME_FORMATS, DatetimeAdapter } from '@fundamental-ngx/core/datetime';
import { DatetimePickerComponent } from '@fundamental-ngx/core/datetime-picker';
import dayjs, { Dayjs } from 'dayjs';

const placeholders = new Map([
    ['en', 'mm/dd/yyyy, hh:mm a'],
    ['fr', 'dd/mm/yyyy  hh:mm'],
    ['bg', 'дд.мм.гг чч:мм'],
    ['de', 'dd.mm.yy, hh:mm'],
    ['pl', 'dd.mm.yyyy, hh:mm']
]);

@Component({
    selector: 'fd-datetime-picker-complex-i18n-example',
    templateUrl: './datetime-picker-complex-i18n-example.component.html',
    styleUrls: ['./datetime-picker-complex-i18n-example.component.scss'],
    providers: [
        // Note that this is usually provided in the root of your application.
        // Due to the limit of this example we must provide it on this level.
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        {
            provide: DatetimeAdapter,
            useClass: DayjsDatetimeAdapter
        },
        {
            provide: DATE_TIME_FORMATS,
            useValue: DAYJS_DATETIME_FORMATS
        }
    ]
})
export class DatetimePickerComplexI18nExampleComponent {
    readonly localeOptions = ['en', 'fr', 'de', 'bg', 'ar', 'zh'];
    locale = this.localeOptions[0];

    date = dayjs();

    placeholder = placeholders.get(this.locale);

    @ViewChild(DatetimePickerComponent) datetimePickerComponent: DatetimePickerComponent<Dayjs>;

    constructor(private datetimeAdapter: DatetimeAdapter<any>) {
        // loading of locales should be done asyncronously in the root of your application
        loadLocales(this.localeOptions); // TODO: loader
    }

    public setLocale(locale: string): void {
        this.locale = locale;
        this.datetimeAdapter.setLocale(locale);
        this.placeholder = placeholders.get(this.locale);
    }
}
