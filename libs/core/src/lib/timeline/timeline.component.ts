import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ContentChildren,
    Input,
    IterableChangeRecord,
    IterableDiffer,
    IterableDiffers,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    QueryList,
    SimpleChanges,
    TrackByFunction,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { ViewportRuler } from '@angular/cdk/overlay';
import { takeUntil } from 'rxjs/operators';

import { TimelineFirstListOutletDirective } from './directives/timeline-first-list-outlet.directive';
import { TimelineNodeDefDirective, TimelineNodeOutletContext } from './directives/timeline-node-def.directive';
import { TimelinePositionControlService } from './services/timeline-position-control.service';
import { TimelineAxis, TimeLinePositionStrategy, TimelineSidePosition } from './types';
import { TimelineSecondListOutletDirective } from './directives/timeline-second-list-outlet.directive';
import { TimelineGroupHeaderComponent } from './components/timeline-group-header/timeline-group-header.component';
import { TimelineNodeComponent } from './components/timeline-node/timeline-node.component';

@Component({
    selector: 'fd-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TimelinePositionControlService],
    host: {
        role: 'timeline',
        'arial-label': 'timeline',
        class: 'fd-timeline',
        '[class.fd-timeline--horizontal]': 'axis === "horizontal"',
        '[class.fd-timeline--vertical]': 'axis === "vertical"'
    }
})
export class TimelineComponent<T> implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked {
    /**
     * Data array to render
     */
    @Input()
    dataSource: T[] = [];

    /**
     * Tracking function that will be used to check the differences in data changes.
     */
    @Input()
    trackBy: TrackByFunction<T>;

    /**
     * (Optional) Function used to group timeline items.
     */
    @Input()
    @Optional()
    groupBy: TrackByFunction<T>;

    /**
     * Axis for timeline
     */
    @Input()
    axis: TimelineAxis = 'vertical';

    /**
     * Layout for timeline
     */
    @Input()
    layout: TimelineSidePosition = 'right';

    /* First outlet within the timeline template where the dataNodes will be inserted. */
    /** @hidden */
    @ViewChild(TimelineFirstListOutletDirective, { static: true })
    private _firstListOutlet: TimelineFirstListOutletDirective;

    /* Second outlet within the timeline template where the dataNodes will be inserted. */
    /** @hidden */
    @ViewChild(TimelineSecondListOutletDirective, { static: true })
    private _secondListOutlet: TimelineSecondListOutletDirective;

    /** The timeline node template for the timeline */
    /** @hidden */
    @ContentChildren(TimelineNodeDefDirective, { descendants: true })
    private _nodeDefs: QueryList<TimelineNodeDefDirective<T>>;

    /** @hidden */
    @ContentChildren(TimelineNodeComponent, { descendants: true })
    private _timelineNodes: QueryList<TimelineNodeComponent>;

    /** @hidden */
    _canShowFirstList = true;

    /** @hidden */
    _canShowSecondList = true;

    /** Differ used to find the changes in the data provided by the data source. */
    private _dataDifferForFirstList: IterableDiffer<T>;
    private _dataDifferForSecondList: IterableDiffer<T>;

    /** @hidden */
    private readonly _onDestroy = new Subject<void>();

    /** @hidden */
    constructor(
        private _differs: IterableDiffers,
        private _cd: ChangeDetectorRef,
        private _timelinePositionControlService: TimelinePositionControlService,
        private _viewportRuler: ViewportRuler,
        private _ngZone: NgZone,
        private _resolver: ComponentFactoryResolver
    ) {}

    /** @hidden */
    ngOnInit(): void {
        this._dataDifferForFirstList = this._differs.find([]).create(this.trackBy);
        this._dataDifferForSecondList = this._differs.find([]).create(this.trackBy);

        this._canShowFirstList = this.layout !== 'right' && this.layout !== 'bottom';
        this._canShowSecondList = this.layout !== 'left' && this.layout !== 'top';
    }

    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void {
        if ('axis' in changes || 'layout' in changes) {
            this._canShowFirstList = this.layout !== 'right' && this.layout !== 'bottom';
            this._canShowSecondList = this.layout !== 'left' && this.layout !== 'top';
            this._setPositionStrategy();
            this.switchDataSource(this.dataSource);
        }
        if ('dataSource' in changes && !changes['dataSource'].firstChange) {
            const value = changes['dataSource'].currentValue;
            this.switchDataSource(value);
        }
    }

    /** @hidden */
    ngAfterViewInit(): void {
        this._viewportRuler
            .change(50)
            .pipe(takeUntil(this._onDestroy))
            // ViewportRuler invoked out of zone, that is why I need to invoke function in zone
            .subscribe(() => this._ngZone.run(() => this._timelinePositionControlService.calculatePositions()));
        this._setPositionStrategy();
        this.switchDataSource(this.dataSource);
    }

    ngAfterViewChecked(): void {
        if (this.groupBy) {
            this._timelineNodes.changes.subscribe(() => this._handleGroups());
        }
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._firstListOutlet.viewContainer.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    /**
     * Update state by new data source
     * If the data source is null, interpret this by clearing the node outlet.
     */
    /** @hidden */
    private switchDataSource(data: T[]): void {
        if (!data) {
            this._firstListOutlet.viewContainer.clear();
            return;
        }
        if (this._nodeDefs) {
            const [first, second] = this._splitList(data);
            this._renderNodeChanges(first, this._dataDifferForFirstList, this._firstListOutlet?.viewContainer);
            this._renderNodeChanges(second, this._dataDifferForSecondList, this._secondListOutlet?.viewContainer);
            this._cd.detectChanges();
            this._timelinePositionControlService.calculatePositions();
            this._cd.detectChanges();
        }
    }

    /** Check for changes made in the data and render each change (node added/removed/moved). */
    /** @hidden */
    private _renderNodeChanges(data: T[], differ: IterableDiffer<T>, vcr: ViewContainerRef): void {
        const changes = differ.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation(
            (item: IterableChangeRecord<T>, adjustedPreviousIndex: number | null, currentIndex: number | null) => {
                if (item.previousIndex === null) {
                    this._insertNode(data[currentIndex], currentIndex, vcr);
                } else if (currentIndex === null) {
                    vcr.remove(adjustedPreviousIndex);
                } else {
                    const view = vcr.get(adjustedPreviousIndex);
                    vcr.move(view, currentIndex);
                }
            }
        );
    }

    /** @hidden */
    private _handleGroups(): void {
        console.log(this._timelineNodes);
        this._timelineNodes.forEach((node, index) => {
            console.log(node);
        });
    }

    private _setPositionStrategy(): void {
        this._timelinePositionControlService.setStrategy(`${this.axis}-${this.layout}` as TimeLinePositionStrategy);
    }

    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    /** @hidden */
    private _insertNode(nodeData: T, index: number, vcr: ViewContainerRef): void {
        const node = this._getNodeDef(index);

        // Node context that will be provided to created embedded view
        const context = new TimelineNodeOutletContext<T>(nodeData);

        vcr.createEmbeddedView(node.template, context, index);

        // const factory = this._resolver.resolveComponentFactory(TimelineGroupHeaderComponent);
        // const timelineGroupHeader = vcr.createComponent(factory);
        // timelineGroupHeader.instance.groupTitle = 'asdf';
    }

    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned.
     */
    /** @hidden */
    private _getNodeDef(i: number): TimelineNodeDefDirective<T> {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        return this._nodeDefs[i];
    }

    /**
     * Split data list to two list first and second to represent timelines in two lists.
     */
    /** @hidden */
    private _splitList(dataSource: T[]): T[][] {
        let dataForFirstList = [];
        let dataForSecondList = [];
        if (this.layout === 'left' || this.layout === 'top') {
            dataForFirstList = [...dataSource];
        } else if (this.layout === 'right' || this.layout === 'bottom') {
            dataForSecondList = [...dataSource];
        } else {
            dataSource.forEach((item, index) => {
                if (index % 2 === 0) {
                    dataForFirstList.push(item);
                } else {
                    dataForSecondList.push(item);
                }
            });
        }
        return [dataForFirstList, dataForSecondList];
    }
}
