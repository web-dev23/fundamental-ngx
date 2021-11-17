import { ChangeDetectionStrategy, Component, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'fd-timeline-group',
    template: `<div class="fd-timeline__group-header-container">
        <div
            class="fd-timeline__group-header"
            (click)="_headerClicked()"
            [ngClass]="{ 'fd-timeline__group-header--collapsed': !expanded }"
            tabindex="0"
        >
            <span class="fd-timeline__group-header-icon">
                <i [ngClass]="expanded ? 'sap-icon--navigation-down-arrow' : 'sap-icon--navigation-right-arrow'"></i>
            </span>
            <span class="fd-timeline__group-header-text">{{ groupTitle }}</span>
        </div>
        <div class="fd-timeline__group-header-bar" *ngIf="!expanded"></div>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineGroupHeaderComponent {
    /** String representing the text that will be applied to the collapsed group item. */
    groupTitle: string;

    /** Whether or not this timeline is expanded. */
    expanded = true;

    /*Ref to ViewContainerRef instance*/
    constructor(public viewContainer: ViewContainerRef) {}

    /** @hidden */
    _headerClicked(): void {
        this.expanded = !this.expanded;
    }
}
