import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { GroupedData, TimelineAxis } from '../../types';
import { TimelinePositionControlService } from '../../services/timeline-position-control.service';

const OFFSET_FOR_FOCUS_BORDER = 3;

@Component({
    selector: 'fd-timeline-group-control',
    templateUrl: './timeline-group-control.component.html',
    host: {
        tabindex: '0',
        'class': 'fd-timeline__group-header',
    }
})
export class TimelineGroupControlComponent implements OnInit {

    @Input()
    nodesGroup: GroupedData;

    /**
     * Axis for layout
     */
    @Input()
    axis: TimelineAxis = 'horizontal';

    constructor(
        private _el: ElementRef,
        private _timelinePositionControlService: TimelinePositionControlService,
    ) {
    }


    ngOnInit(): void {
        this._timelinePositionControlService.registerGroup(this);
    }

    calculatePosition(): void {
        this.axis === 'horizontal'
            ? this._setHeaderPositionForHorizontalAxis()
            : this._setHeaderPositionForVerticalAxis();
    }

    private _setHeaderPositionForHorizontalAxis(): void {
        const firstNodePositionLeft = this.nodesGroup.elements[0].offsetLeft;
        this._el.nativeElement.style.left = `${firstNodePositionLeft + OFFSET_FOR_FOCUS_BORDER}px`;
    }

    private _setHeaderPositionForVerticalAxis(): void {
        const firstNodePositionTop = this.nodesGroup.elements[0].offsetTop;
        this._el.nativeElement.style.top = `${firstNodePositionTop + OFFSET_FOR_FOCUS_BORDER}px`;
        this.nodesGroup.elements[0].style.marginTop = `52px`;
    }
}
