import { BaseStrategy } from './base-strategy';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';

export class VerticalSingleSideStrategy extends BaseStrategy {

    calculatePosition(nodes: TimelineNodeComponent[]): void {
        this._setStylesForSingleList(nodes, 'vertical');
    }
}
