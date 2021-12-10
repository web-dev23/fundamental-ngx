import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { TimelineAxis, TimelinePositionControlService } from '../..';

@Component({
    selector: 'fd-timeline-group',
    templateUrl: './timeline-group-header.component.html',
    host: {
        class: 'fd-timeline__node-wrapper'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineGroupHeaderComponent implements OnInit, OnDestroy {
    /** String representing the text that will be applied to the collapsed group item. */
    groupTitle: string;

    /** Whether or not this timeline is expanded. */
    expanded = true;

    /** @hidden */
    glyph: string;

    /** @hidden */
    axis: TimelineAxis = 'vertical';

    /** Event emitted when the dragged file exits the dropzone. */
    @Output()
    readonly headerClicked = new EventEmitter<{ groupTitle: string; expanded: boolean }>();

    /* Reference to the line of timeline node*/
    @ViewChild('lineEl')
    lineEl: ElementRef;

    /* Ref to ViewContainerRef instance */
    constructor(
        public viewContainer: ViewContainerRef,
        public el: ElementRef,
        private _timelinePositionControl: TimelinePositionControlService
    ) {}

    /** @hidden */
    ngOnInit(): void {
        this._timelinePositionControl.registerNode(this);
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._timelinePositionControl.removeNode(this);
    }

    /** @hidden */
    _headerClicked(): void {
        this.expanded = !this.expanded;
        this.headerClicked.emit({ groupTitle: this.groupTitle, expanded: this.expanded });
    }
}
