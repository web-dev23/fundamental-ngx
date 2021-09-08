import { BaseStrategy } from './base-strategy';
import { TimelineNodePosition } from '../../types';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';

export class VerticalRightSideStrategy extends BaseStrategy {

    getCoords(): TimelineNodePosition {
        return undefined;
    }

    calculatePosition(nodes: TimelineNodeComponent[]): void {
        nodes.forEach((node, index) => {
            const nextNode = nodes[index + 1];
            if (nextNode) {
                const width = (nextNode.el.nativeElement.offsetTop) - node.el.nativeElement.offsetTop;
                node.lastLine.nativeElement.style.height = width + 'px';
            } else {
                node.lastLine.nativeElement.style.opacity = '0';
            }
        });
    }
}
