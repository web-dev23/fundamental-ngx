import dayjs from 'dayjs';

export async function loadLocale(locale: string): Promise<void> {
    const localeModule = await import('dayjs/locale/' + locale);
    dayjs.locale(localeModule);
}
