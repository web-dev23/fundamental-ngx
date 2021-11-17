import { Component } from '@angular/core';
import { TIMELINE_EXAMPLE_DATA } from '../timeline-basic-example/timeline-example-data';

@Component({
    selector: 'fd-timeline-group-example',
    templateUrl: './timeline-group-example.component.html'
})
export class TimelineGroupExampleComponent {
    data = TIMELINE_EXAMPLE_DATA;

    trackBy(index: number, item: any): string {
        return item.title;
    }

    groupBy(index: number, item: any): string {
        return item.date.getFullYear();
    }
}
