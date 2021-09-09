import { BaseStrategy } from './base-strategy';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';

export class HorizontalDoubleSidesStrategy extends BaseStrategy {

    calculatePosition(nodes: TimelineNodeComponent[]): any {
        this._setStylesForDoubleList(nodes, 'horizontal');
        // const [firstList, secondList] = this._getTwoListFromOne(nodes);
        //
        // firstList.forEach((node, index) => {
        //     const el = node.el.nativeElement;
        //     const parallelNode = secondList[index];
        //     if (parallelNode) {
        //         const width = (parallelNode.el.nativeElement.offsetLeft) - el.offsetLeft - this._getOffset(node);
        //         node.lastLine.nativeElement.style.width = width + 'px';
        //     }
        // });
        //
        // secondList.forEach((node, index) => {
        //     const el = node.el.nativeElement;
        //     const parallelNode = firstList[index];
        //     if (parallelNode) {
        //         const width = parallelNode.el.nativeElement.offsetLeft + parallelNode.el.nativeElement.offsetWidth - el.offsetLeft - this._getOffset(node);
        //         node.lastLine.nativeElement.style.width = width + 'px';
        //     }
        // });
        //
        // const lastNode = firstList.length === secondList.length
        //     ? secondList[secondList.length - 1]
        //     : firstList[firstList.length - 1];
        // lastNode.lastLine.nativeElement.style.opacity = '0';
    }
}
