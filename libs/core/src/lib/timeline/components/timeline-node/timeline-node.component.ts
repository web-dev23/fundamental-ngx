import { Component, ElementRef, Input, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';
import { ListNames, TimelineNodePosition } from '../../types';
import { TimelineNodeListDirective } from '../../directives/timeline-node-list.directive';
import { TimelinePositionControlService } from '../../services/timeline-position-control.service';

@Component({
    selector: 'fd-timeline-node',
    templateUrl: './timeline-node.component.html',
    host: {
        'class': 'fd-timeline__node-wrapper',
        '[class.fd-timeline__node-wrapper--icon]': '!!glyph'
    }
})
export class TimelineNodeComponent implements OnInit, OnDestroy {

    /* Glyph of the current timeline node.*/
    @Input()
    glyph: string;

    /* Glyph of the current timeline node.*/
    @Input()
    groupItem: any;

    @ViewChild('lineEl')
    lastLine: ElementRef;

    _position: TimelineNodePosition;

    _cssClasses: string[];

    isFirstList: boolean;

    tabIndex = 0;

    constructor(
        public el: ElementRef,
        private _timelinePositionControl: TimelinePositionControlService
    ) {
    }

    ngOnInit(): void {
        this.isFirstList = !!this.el.nativeElement.parentElement.closest('.fd-timeline__list--first');
        this._timelinePositionControl.registerNode(this);
    }

    ngOnDestroy(): void {
        this._timelinePositionControl.removeNode(this);
    }

    setPosition(position: TimelineNodePosition): any {
        this._position = position;
    }

    setClasses(classes: string[]): void {
        console.log(classes);
        this._cssClasses = classes;
    }

    setListName(name: ListNames): void {
        // this.listName = name;
    }
}
