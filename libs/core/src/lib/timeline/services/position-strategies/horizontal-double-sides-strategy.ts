import { BaseStrategy } from './base-strategy';
import { TimelineNodePosition } from '../../types';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';

export class HorizontalDoubleSidesStrategy extends BaseStrategy {

    getCoords(): TimelineNodePosition {
        return undefined;
    }

    calculatePosition(nodes: TimelineNodeComponent[]): any {
        const lastIndexInFirstList = Math.floor(nodes.length / 2);
        const firstList = nodes.slice(0, lastIndexInFirstList + 1);
        const secondList = nodes.slice(lastIndexInFirstList + 1, nodes.length);


        firstList.forEach((node, index) => {
            const el = node.el.nativeElement;
            const parallelNode = secondList[index];
            if (parallelNode) {
                const width = (parallelNode.el.nativeElement.offsetLeft) - el.offsetLeft - 14;
                node.lastLine.nativeElement.style.width = width + 'px';
            }
        });

        secondList.forEach((node, index) => {
            const el = node.el.nativeElement;
            const parallelNode = firstList[index];
            if (parallelNode) {
                const width = (parallelNode.el.nativeElement.offsetLeft + parallelNode.el.nativeElement.offsetWidth) - el.offsetLeft - 14;
                node.lastLine.nativeElement.style.width = width + 'px';
            }
        });

        const lastNode = firstList.length === secondList.length
            ? secondList[secondList.length - 1]
            : firstList[firstList.length - 1];
        lastNode.lastLine.nativeElement.style.opacity = '0';
    }
}
