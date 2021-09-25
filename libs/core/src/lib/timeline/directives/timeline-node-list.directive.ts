import { Directive, Input, OnInit } from '@angular/core';
import { TimelineNodeComponent } from '@fundamental-ngx/core';
import { TimelinePositionControlService } from '../services/timeline-position-control.service';
import { ListNames } from '../types';

@Directive({
  selector: '[fdTimelineNodeList]'
})
export class TimelineNodeListDirective implements OnInit {

    @Input()
    fdTimelineNodeList: ListNames;

    private _unsortedItems = new Set<TimelineNodeComponent>();

    constructor(
        private _timelinePositionControlService: TimelinePositionControlService,
    ) {}

    ngOnInit(): void {
    }

    registerNode(node: TimelineNodeComponent): void {
        node.setListName(this.fdTimelineNodeList);
        this._unsortedItems.add(node);
        // this._timelinePositionControlService.registerNode({listName: this.fdTimelineNodeList, node: node});
    }

    removeNode(node: TimelineNodeComponent): void {
        this._unsortedItems.delete(node);
        // this._timelinePositionControlService.removeNode({listName: this.fdTimelineNodeList, node: node});
    }

}
