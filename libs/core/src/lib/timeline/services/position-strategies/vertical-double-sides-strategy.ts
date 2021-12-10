import { BaseStrategy } from './base-strategy';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';
import { TimelineGroupHeaderComponent } from '../..';

export class VerticalDoubleSidesStrategy extends BaseStrategy {
    /** Calculate styles for timeline nodes */
    calculateStyles(nodes: (TimelineNodeComponent | TimelineGroupHeaderComponent)[]): void {
        this._setStylesForDoubleList(nodes, 'vertical');
    }
}
