export interface TimelineNodePosition {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}

export type TimelineAxis = 'vertical' | 'horizontal';

export type TimelineSidePosition = 'left' | 'right' | 'top' | 'bottom' | 'double';

export type TimeLinePositionStrategy = `${TimelineAxis}-${TimelineSidePosition}`;
