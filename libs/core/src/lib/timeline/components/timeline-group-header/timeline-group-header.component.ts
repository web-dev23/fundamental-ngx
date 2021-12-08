import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'fd-timeline-group',
    templateUrl: './timeline-group-header.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineGroupHeaderComponent {
    /** String representing the text that will be applied to the collapsed group item. */
    groupTitle: string;

    /** Whether or not this timeline is expanded. */
    expanded = true;

    /** Event emitted when the dragged file exits the dropzone. */
    @Output()
    readonly headerClicked = new EventEmitter<{ groupTitle: string; expanded: boolean }>();

    /*Ref to ViewContainerRef instance*/
    constructor(public viewContainer: ViewContainerRef) {}

    /** @hidden */
    _headerClicked(): void {
        this.expanded = !this.expanded;
        this.headerClicked.emit({ groupTitle: this.groupTitle, expanded: this.expanded });
    }
}
