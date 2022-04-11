import dayjs from 'dayjs';

/**
 * Utility function that allows to load dayjs locales globally. 
 * Note that loading the locale won't automatically apply it (unlike dayjs's native behavior)
 * 
 * @param locales locale name or list of locales to be loaded
 * @usage
 * ```typescript
 * loadLocales('ua');
 * // OR
 * loadLocales(['ja', 'ua']);
 * ```
 */
export async function loadLocales(locales: string | string[]): Promise<void> {
    const currentLocale = dayjs.locale();
    if (typeof locales === 'string') {
        locales = [locales];
    }
    const localeModules = await Promise.all(locales.map(l => import('dayjs/locale/' + l)));
    for (const localeModule of localeModules) {
        dayjs.locale(localeModule);
    }
    // switch back to current locale
    dayjs.locale(currentLocale);
}
