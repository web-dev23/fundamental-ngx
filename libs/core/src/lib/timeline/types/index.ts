import { TimelineNodeComponent } from '@fundamental-ngx/core';

export interface TimelineNodePosition {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}

export type TimelineAxis = 'vertical' | 'horizontal';

export type TimelineSidePosition = 'left' | 'right' | 'top' | 'bottom' | 'double';

export type GroupByType = 'year' | 'month' | 'week' | 'day';

export type ListNames = 'first' | 'second';

export type TimeLinePositionStrategy = `${TimelineAxis}-${TimelineSidePosition}`;

export interface StrategyOptions {
    grouping: boolean;
}

export interface GroupedData {
    label: string;
    elements: TimelineNodeComponent[];
}
