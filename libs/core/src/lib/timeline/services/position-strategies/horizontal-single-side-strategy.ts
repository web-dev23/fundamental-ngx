import { BaseStrategy } from './base-strategy';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';
import { TimelineGroupHeaderComponent } from '../..';

export class HorizontalSingleSideStrategy extends BaseStrategy {
    /** Calculate styles for timeline nodes */
    calculateStyles(nodes: (TimelineNodeComponent | TimelineGroupHeaderComponent)[]): any {
        this._setStylesForSingleList(nodes, 'horizontal');
    }
}
