import { DataProvider, ProviderParams } from '@fundamental-ngx/platform/shared';
import { Observable, of } from 'rxjs';

const DATA = [
    { state: 'Alabama', city: 'Montgomery' },
    { state: 'Plaska', city: 'Juneau' },
    { state: 'Arizona', city: 'Phoenix' },
    { state: 'Arkansas', city: 'Little Rock' },
    { state: 'California', city: 'Sacramento' },
    { state: 'Colorado', city: 'Denver' }
];

export class MultiInputDateProvider extends DataProvider<string> {
    constructor() {
        super();
    }

    fetch(params: Map<string, string>): Observable<any> {
        let data = DATA;
        if (params.get('keyword')) {
            const keyword = params.get('keyword').toLowerCase();
            data = data.filter((item) => item.state.toLowerCase().indexOf(keyword) > -1);
        }
        if (params.get('category')) {
            data = data.filter((item) => item.city === params.get('category'));
        }

        return of(data.map((item) => item.state));
    }

    insert(payload: any, params?: ProviderParams): Observable<any> {
        const data = DATA;
        data.push(payload);

        return of(data);
    }
}
