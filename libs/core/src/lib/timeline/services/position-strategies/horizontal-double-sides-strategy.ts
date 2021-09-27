import { BaseStrategy } from './base-strategy';
import { TimelineNodeComponent } from '../../components/timeline-node/timeline-node.component';
import { GroupedData } from '../../types';

export class HorizontalDoubleSidesStrategy extends BaseStrategy {

    calculatePosition(nodes: TimelineNodeComponent[], groups?: GroupedData[]): any {
        if (groups?.length) {
            let singleListBuffer = [];
            for (let i = 0; i < groups.length; i++) {
                const group = groups[i];
                if (group.elements.length === 1) {
                    singleListBuffer.push(group.elements[0]);
                    debugger;
                    if (i === groups.length - 1) {
                        continue;
                    }
                }
                debugger;
                if (singleListBuffer.length) {
                    // debugger;
                    this._setStylesForSingleList(singleListBuffer, 'horizontal');
                }
                singleListBuffer = [];
                this._setStylesForDoubleList(group.elements, 'horizontal');
            }
            const lastGroup = groups[groups.length - 1];
            const lastNode = lastGroup.elements[lastGroup.elements.length - 1];
            lastNode.lastLine.nativeElement.style.opacity = '0';

        } else {
            this._setStylesForDoubleList(nodes, 'horizontal');
            // Last node shouldn't have last line
            // const lastNode = firstList.length === secondList.length
            //     ? secondList[secondList.length - 1]
            //     : firstList[firstList.length - 1];
            // lastNode.lastLine.nativeElement.style.opacity = '0';
        }
    }
}
