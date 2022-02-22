import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    // TODO(ds): e2e-refactor
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'fd-datetime-important',
    templateUrl: './datetime-important.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatetimeImportantComponent {
    @Input()
    componentName: string;
}
