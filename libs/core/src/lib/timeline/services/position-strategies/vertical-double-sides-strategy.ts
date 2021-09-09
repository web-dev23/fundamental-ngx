import { BaseStrategy } from './base-strategy';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';

export class VerticalDoubleSidesStrategy extends BaseStrategy {

    calculatePosition(nodes: TimelineNodeComponent[]): void {
        this._setStylesForDoubleList(nodes, 'vertical');
        // const [firstList, secondList] = this._getTwoListFromOne(nodes);
        //
        // secondList.forEach((node, index) => {
        //     const el = node.el.nativeElement;
        //     const parallelNode = firstList[index];
        //
        //     const prevNode = secondList[index - 1];
        //     const diffBetween = prevNode
        //         ? (parallelNode.el.nativeElement.offsetTop + 24) - (prevNode.el.nativeElement.offsetTop + prevNode.el.nativeElement.offsetHeight)
        //         : -1;
        //     if (diffBetween > 0) {
        //         prevNode.el.nativeElement.style.paddingBottom = `${diffBetween}px`;
        //     }
        //
        //     const diff = (parallelNode.el.nativeElement.offsetTop + parallelNode.el.nativeElement.offsetHeight) - el.offsetTop - this._getOffset(node);
        //     node.lastLine.nativeElement.style.height = diff + 'px';
        // });
        //
        //
        // firstList.forEach((node, index) => {
        //     const el = node.el.nativeElement;
        //     const parallelNode = secondList[index];
        //     if (parallelNode) {
        //         const diff = (parallelNode.el.nativeElement.offsetTop) - el.offsetTop - this._getOffset(node);
        //         node.lastLine.nativeElement.style.height = diff + 'px';
        //     }
        // });
        //
        // const lastNode = firstList.length === secondList.length
        //     ? secondList[secondList.length - 1]
        //     : firstList[firstList.length - 1];
        // lastNode.lastLine.nativeElement.style.opacity = '0';
    }
}
