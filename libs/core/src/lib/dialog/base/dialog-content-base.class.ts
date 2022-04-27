import { Nullable } from "@fundamental-ngx/core/shared";

export class DialogContentBase {
    /** Dialog Title id */
    titleId?: string;

    /** Dialog Title */
    title?: string;

    /** Dialog Body */
    content?: unknown;

    /** Approve Button Label */
    approveButton?: string;

    /** Aria Modal for the dialog component element */
    ariaModal?: boolean;

    /** Aria label for the dialog component element. */
    ariaLabel: Nullable<string>;

    /** Aria labelby for the dialog component element. */
    ariaLabelledBy: Nullable<string>;

    /** Aria DescribedBy for the dialog component element.. */
    ariaDescribedBy: Nullable<string>;

    /** Approve Button Click Callback */
    approveButtonCallback?: () => void;

    /** Cancel Button Label */
    cancelButton?: string;

    /** Cancel Button Click Callback */
    cancelButtonCallback?: () => void;

    /** Close Button Callback */
    closeButtonCallback?: () => void;

    /** close button title */
    closeButtonTitle?: string;

    /** Aria label for the dialog approve button element. */
    approveButtonAriaLabel?: string;

    /** Aria labelby for the dialog close button element. */
    closeButtonAriaLabel?: string;
}
