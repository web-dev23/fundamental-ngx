import { BaseStrategy } from './base-strategy';
import { StrategyOptions, TimeLinePositionStrategy, TimelineSidePosition } from '../../types';
import { VerticalDoubleSidesStrategy } from './vertical-double-sides-strategy';
import { HorizontalTopSideStrategy } from './horizontal-top-side-strategy';
import { HorizontalBottomSideStrategy } from './horizontal-bottom-side-strategy';
import { HorizontalDoubleSidesStrategy } from './horizontal-double-sides-strategy';
import { VerticalRightSideStrategy } from './vertical-right-side-strategy';
import { VerticalLeftSideStrategy } from './vertical-left-side-strategy';

export class PositionStrategyFactory {
    static getStrategy(strategy: TimeLinePositionStrategy, options: Partial<StrategyOptions>): BaseStrategy {
        switch (strategy) {
            case 'vertical-right':
                return new VerticalRightSideStrategy(options);
            case 'vertical-left':
                return new VerticalRightSideStrategy(options);
            case 'vertical-double':
                return new VerticalDoubleSidesStrategy(options);
            case 'horizontal-top':
                return new HorizontalBottomSideStrategy(options);
            case 'horizontal-bottom':
                return new HorizontalBottomSideStrategy(options);
            case 'horizontal-double':
                return new HorizontalDoubleSidesStrategy(options);
            default:
                return new VerticalRightSideStrategy(options);
        }
    }

    static getLists(dataSource: any[], position: TimelineSidePosition): any[] {
        let dataForFirstList = [];
        let dataForSecondList = [];
        if (position === 'left' || position === 'top') {
            dataForFirstList = [...dataSource];
        } else if (position === 'right' || position === 'bottom') {
            dataForSecondList = [...dataSource];
        } else {
            dataSource.forEach((item, index) => {
                if (index % 2 === 0) {
                    dataForFirstList.push(item);
                } else {
                    dataForSecondList.push(item);
                }
            });
        }
        return [dataForFirstList, dataForSecondList];
    }
}

