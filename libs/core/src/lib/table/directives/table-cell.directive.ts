import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
    AfterContentInit,
    Directive,
    ElementRef,
    HostBinding,
    Input,
    QueryList,
    ContentChildren,
    forwardRef,
    OnDestroy
} from '@angular/core';
import { CheckboxComponent } from '@fundamental-ngx/core/checkbox';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Directive({
    selector: '[fdTableCell], [fd-table-cell]'
})
export class TableCellDirective implements AfterContentInit, OnDestroy {
    /** Whether or not to show the table cell's horizontal borders */
    @HostBinding('class.fd-table__cell--no-horizontal-border')
    @Input()
    noBorderX = false;

    /** Whether or not to show the table cell's vertical borders */
    @HostBinding('class.fd-table__cell--no-vertical-border')
    @Input()
    noBorderY = false;

    /** Whether or not the table cell is activable */
    @HostBinding('class.fd-table__cell--activable')
    @Input()
    activable = false;

    /** Whether or not the table cell is focusable */
    @HostBinding('class.fd-table__cell--focusable')
    @Input()
    focusable = false;

    /** Whether or not the table cell is hoverable */
    @HostBinding('class.fd-table__cell--hoverable')
    @Input()
    hoverable = false;

    /** Whether or not the table cell's width should fit to content  */
    @HostBinding('class.fd-table__cell--fit-content')
    @Input()
    fitContent = false;

    /** Whether or not the table cell shouldn't have padding on sides */
    @HostBinding('class.fd-table__cell--no-padding')
    @Input()
    noPadding = false;

    /** Whether or not the table cell indicates that there is no data */
    @HostBinding('class.fd-table__cell--no-data')
    @Input()
    noData = false;

    /** Key of cell element, it's used to identify this cell with certain column */
    @Input()
    key: string;

    /** @hidden */
    @ContentChildren(forwardRef(() => CheckboxComponent))
    _checkboxes: QueryList<CheckboxComponent>;

    /** @hidden */
    @HostBinding('class.fd-table__cell')
    _fdTableCellClass = true;

    private readonly _onDestroy$ = new Subject<void>();

    constructor(public elementRef: ElementRef<HTMLElement>, private liveAnnouncer: LiveAnnouncer) {}

    ngOnDestroy(): void {
        this._onDestroy$.next();
    }

    /** @hidden */
    ngAfterContentInit(): void {
        const cell = this.elementRef.nativeElement;

        if (this._checkboxes && this._checkboxes.length) {
            cell.classList.add('fd-table__cell--checkbox');
        }

        if (this.noData) {
            cell.setAttribute('colspan', '100%');
        }

        fromEvent(cell, 'focusin')
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(() => {
                const data = this.getCellPosition();

                if (!data) {
                    return;
                }

                this.liveAnnouncer.clear();
                // TODO: add input
                this.liveAnnouncer.announce(
                    `Column ${data.col + 1} of ${data.totalCols}, row: ${data.row + 1} of ${data.totalRows}`
                );
            });
    }

    /** Returns row and col indexes for the cell */
    getCellPosition(): TableCellPosition | undefined {
        const body = this.elementRef.nativeElement.closest('tbody');
        if (!body) {
            return;
        }
        const rows = body.children;
        const cols = this.elementRef.nativeElement.parentElement!.children;
        const parentRow = this.elementRef.nativeElement.closest('tr') as HTMLTableRowElement;
        const row = [...(rows as any as Element[])].indexOf(parentRow);
        const col = [...(cols as any as Element[])].indexOf(this.elementRef.nativeElement);
        return { row, col, totalRows: rows.length, totalCols: cols.length };
    }
}

export interface TableCellPosition {
    row: number;
    col: number;
    totalRows: number;
    totalCols: number;
}
