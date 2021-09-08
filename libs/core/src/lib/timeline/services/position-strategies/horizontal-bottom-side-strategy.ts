import { BaseStrategy } from './base-strategy';
import { TimelineNodePosition } from '../../types';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';

export class HorizontalBottomSideStrategy extends BaseStrategy {

    getCoords(): TimelineNodePosition {
        return undefined;
    }

    calculatePosition(nodes: TimelineNodeComponent[]): any {
        nodes.forEach((node, index) => {
            const nextNode = nodes[index + 1];
            if (nextNode) {
                const width = (nextNode.el.nativeElement.offsetLeft) - node.el.nativeElement.offsetLeft - 14;
                node.lastLine.nativeElement.style.width = width + 'px';
            } else {
                node.lastLine.nativeElement.style.opacity = '0';
            }
        });
    }
}
