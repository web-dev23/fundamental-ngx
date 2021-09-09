import { BaseStrategy } from './base-strategy';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';

export class HorizontalSingleSideStrategy extends BaseStrategy {

    calculatePosition(nodes: TimelineNodeComponent[]): any {
        this._setStylesForSingleList(nodes, 'horizontal');
    }
}
