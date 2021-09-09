import { BaseStrategy } from './base-strategy';
import { StrategyOptions, TimeLinePositionStrategy, TimelineSidePosition } from '../../types';
import { VerticalDoubleSidesStrategy } from './vertical-double-sides-strategy';
import { HorizontalSingleSideStrategy } from './horizontal-single-side-strategy';
import { HorizontalDoubleSidesStrategy } from './horizontal-double-sides-strategy';
import { VerticalSingleSideStrategy } from './vertical-single-side-strategy';

export class PositionStrategyFactory {
    static getStrategy(strategy: TimeLinePositionStrategy): BaseStrategy {
        switch (strategy) {
            case 'vertical-right':
                return new VerticalSingleSideStrategy();
            case 'vertical-left':
                return new VerticalSingleSideStrategy();
            case 'vertical-double':
                return new VerticalDoubleSidesStrategy();
            case 'horizontal-top':
                return new HorizontalSingleSideStrategy();
            case 'horizontal-bottom':
                return new HorizontalSingleSideStrategy();
            case 'horizontal-double':
                return new HorizontalDoubleSidesStrategy();
            default:
                return new VerticalSingleSideStrategy();
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

