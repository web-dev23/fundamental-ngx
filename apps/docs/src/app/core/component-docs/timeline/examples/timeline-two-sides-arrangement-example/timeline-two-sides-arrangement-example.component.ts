import { Component, OnDestroy } from '@angular/core';
import { TIMELINE_EXAMPLE_DATA } from '../timeline-basic-example/timeline-example-data';
import { DocsThemeService } from '../../../../../documentation/services/docs-theme.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'fd-timeline-two-sides-arrangement-example',
    templateUrl: './timeline-two-sides-arrangement-example.component.html',
    styleUrls: ['./timeline-two-sides-arrangement-example.component.scss'],
})
export class TimelineTwoSidesArrangementExampleComponent implements OnDestroy {

    data = TIMELINE_EXAMPLE_DATA;

    private readonly _onDestroy$ = new Subject<void>();
    canShowComponent = false;

    constructor(
        private _docsThemeService: DocsThemeService,
    ) {
        // this._docsThemeService.onThemeChange.pipe(
        //     takeUntil(this._onDestroy$)
        // ).subscribe(theme => {
        //     debugger;
        //     this.canShowComponent = true;
        //     console.log(theme);
        // });
        setTimeout(() => {
            this.canShowComponent = true;
        }, 1000);
        // this.canShowComponent = true;
    }

    ngOnDestroy(): void {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }
}
