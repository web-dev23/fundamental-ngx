import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';
import { StrategyOptions, TimelineAxis } from '../../types';

export abstract class BaseStrategy {

    private readonly SMALL_OFFSET = 14;
    private readonly BIG_OFFSET = 30;
    private readonly PADDING_TOP_FOR_GROUP_HANDLER = 52;
    private grouping = false;

    // constructor(options: StrategyOptions) {
    //     this.grouping = !!options.grouping;
    // }


    abstract calculatePosition(nodes: TimelineNodeComponent[]): any;

    protected _getOffset(node: TimelineNodeComponent): number {
        return node.glyph ? this.BIG_OFFSET : this.SMALL_OFFSET;
    }

    protected _getTwoListFromOne(nodes: TimelineNodeComponent[]): [TimelineNodeComponent[], TimelineNodeComponent[]] {
        // const lastIndexInFirstList = Math.floor(nodes.length / 2);
        // const firstList = nodes.slice(0, lastIndexInFirstList + 1);
        // const secondList = nodes.slice(lastIndexInFirstList + 1, nodes.length);
        const firstList = [];
        const secondList = [];
        nodes.forEach(node => {
            node.isFirstList
                ? firstList.push(node)
                : secondList.push(node);
        });
        return [firstList, secondList];
    }

    protected _setStylesForSingleList(nodes: TimelineNodeComponent[], axis: TimelineAxis): void {
        const [offsetProperty, sizeProperty] = axis === 'horizontal'
            ? ['offsetLeft', 'width']
            : ['offsetTop', 'height'];

        nodes.forEach((node, index) => {
            const nextNode = nodes[index + 1];
            if (nextNode) {
                const size = (nextNode.el.nativeElement[offsetProperty]) - node.el.nativeElement[offsetProperty] - this._getOffset(node);
                node.lastLine.nativeElement.style[sizeProperty] = size + 'px';
            } else {
                node.lastLine.nativeElement.style.opacity = '0';
            }
        });
    }

    protected _setStylesForDoubleList(nodes: TimelineNodeComponent[], axis: TimelineAxis): void {
        const [firstList, secondList] = this._getTwoListFromOne(nodes);
        const [offsetProp, sizeProp, sizeOffsetProp] = axis === 'horizontal'
            ? ['offsetLeft', 'width', 'offsetWidth']
            : ['offsetTop', 'height', 'offsetHeight'];

        secondList.forEach((node, index) => {
            const el = node.el.nativeElement;
            const parallelNode = firstList[index];

            if (axis === 'vertical') {
                secondList[index].el.nativeElement.style.marginTop = '14px';
                const prevNode = secondList[index - 1];
                const diffBetween = prevNode
                    ? (parallelNode.el.nativeElement.offsetTop + 24) - (prevNode.el.nativeElement.offsetTop + prevNode.el.nativeElement.offsetHeight)
                    : -1;
                if (diffBetween > 0) {
                    prevNode.el.nativeElement.style.paddingBottom = `${diffBetween}px`;
                }
            }

            const diff = (parallelNode.el.nativeElement[offsetProp] + parallelNode.el.nativeElement[sizeOffsetProp]) - el[offsetProp] - this._getOffset(node);
            node.lastLine.nativeElement.style[sizeProp] = diff + 'px';
        });


        firstList.forEach((node, index) => {
            const el = node.el.nativeElement;
            const parallelNode = secondList[index];
            if (parallelNode) {
                const diff = (parallelNode.el.nativeElement[offsetProp]) - el[offsetProp] - this._getOffset(node);
                node.lastLine.nativeElement.style[sizeProp] = diff + 'px';
            }
        });

        const lastNode = firstList.length === secondList.length
            ? secondList[secondList.length - 1]
            : firstList[firstList.length - 1];
        lastNode.lastLine.nativeElement.style.opacity = '0';

    }
}
