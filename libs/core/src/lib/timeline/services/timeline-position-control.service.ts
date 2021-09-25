import { Injectable, NgZone } from '@angular/core';
import { TimelineNodeComponent } from '../components/timeline-node/timeline-node.component';
import { Subject } from 'rxjs';
import { GroupByType, GroupedData, ListNames, StrategyOptions, TimeLinePositionStrategy } from '../types';
import { BaseStrategy } from './position-strategies/base-strategy';
import { PositionStrategyFactory } from './position-strategies/position-strategy-factory';
import moment from 'moment';
import { TimelineGroupControlComponent } from '../components/timeline-group-control/timeline-group-control.component';

@Injectable()
export class TimelinePositionControlService {

    private _lists: {[key: string]: TimelineNodeComponent[]};
    private _nodeItems: TimelineNodeComponent[] = [];
    private _groupItems: TimelineGroupControlComponent[] = [];
    private readonly _destroyed = new Subject<void>();
    private _positionStrategy: BaseStrategy;

    constructor(
        private _ngZone: NgZone
    ) {
    }

    calculatePositions(): void {
        this._groupItems.forEach(group => group.calculatePosition());
        this._positionStrategy.calculatePosition(this._nodeItems);
    }

    setStrategy(strategy: TimeLinePositionStrategy, options: Partial<StrategyOptions> = {}): void {
        this._positionStrategy = PositionStrategyFactory.getStrategy(strategy);
    }

    registerNode(node: TimelineNodeComponent): void {
        this._nodeItems.push(node);
        node.tabIndex = this._nodeItems.length - 1;
    }

    removeNode(node: TimelineNodeComponent): void {
        this._nodeItems = this._nodeItems.filter(item => item !== node);
    }

    registerGroup(group: TimelineGroupControlComponent): void {
        this._groupItems.push(group);
    }

    removeGroup(group: TimelineGroupControlComponent): void {
        this._groupItems = this._groupItems.filter(item => item !== group);
    }

    moveNode(previousIndex: number, currentIndex: number): void {

    }

    getGroupedNodes(groupedKey: string, data: any, type: GroupByType): GroupedData[] {
        const result = [];
        const buffer = {};
        data.forEach((dataItem, index) => {
            if (!buffer[dataItem[groupedKey]]) {
                buffer[dataItem[groupedKey]] = [];
            }
            buffer[dataItem[groupedKey]].push(this._nodeItems[index]);
        });
        Object.keys(buffer).forEach(key => {
            result.push({
                label: this._getGroupHeaderLabel(key, type),
                elements: buffer[key]
            });
        });
        return result;
    }

    private _getGroupHeaderLabel(date: string, type: GroupByType): string {
        const momentInstance = moment(date);
        switch (type) {
            case 'month':
                return momentInstance.format('MMMM, YYYY');
            case 'week':
                return `${momentInstance.startOf('week').format('ll')} - ${momentInstance.endOf('week').format('ll')}`
            case 'day':
                return momentInstance.format('LL');
            default:
                return momentInstance.format('YYYY');
        }
    }

    destroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
