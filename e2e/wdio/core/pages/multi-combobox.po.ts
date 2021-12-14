import { waitForElDisplayed } from '../../driver/wdio';
import { CoreBaseComponentPo } from './core-base-component.po';

export class MultiComboboxPo extends CoreBaseComponentPo {
    private url = '/multi-combobox';
    root = '#page-content';

    activeDropdownButtons = 'button[title="value-help"]:not(:disabled)';
    activeInputs = '.fd-multi-combobox input:not(:disabled)';
    disableInputs = 'div.is-disabled';
    options = 'fd-checkbox.ng-untouched';
    expandedDropdown = '.fd-list';
    multiComboboxOptions = 'fd-multi-combobox[inputid="multiInput"] .fd-token__text span';
    buttonShowAll = 'a.fd-link';
    hiddenAddonButtonInputOptions = 'fd-multi-combobox[inputid="noAddonMultiCombobox1"] .fd-token__text span';
    compactMultiComboboxOptions = '.fd-token--compact .fd-token__text span';
    approveButton = '.fd-button--emphasized';
    multiSelectButton = '.custom-multi-combobox-select-all-bar-element button';
    mobileInputOptions = 'fd-multi-combobox-mobile-example .fd-token__text span';
    displayObjectOptions = 'div#background-ex3 .fd-token__text span';
    searchTermOptions = 'div#background-ex4 .fd-token__text span';
    customFilterOptions = 'div#background-ex5 .fd-token__text span';
    asyncExampleOptions = 'div#rtl-ex6 .fd-token__text span';
    tokenOptions = 'div#background-ex8 .fd-token__text span';
    templateOptions = 'div#background-ex9 .fd-token__text span';
    simpleExampleTokens = 'fd-multi-combobox-example fd-tokenizer fd-token';
    compactExampleTokens = 'fd-multi-combobox-compact-example fd-tokenizer fd-token';
    popover = '.fd-popover__popper';
    checkboxInput = this.popover + ' fd-checkbox';
    listItem = this.popover + ' .fd-list__item';
    dialogCheckbox = '.fd-dialog fd-checkbox';

    open(): void {
        super.open(this.url);
        waitForElDisplayed(this.root);
        waitForElDisplayed(this.title);
    }

    getScreenshotFolder(): object {
        return super.getScreenshotFolder(this.url);
    }

    saveExampleBaselineScreenshot(specName: string = 'multi-combobox'): void {
        super.saveExampleBaselineScreenshot(specName, this.getScreenshotFolder());
    }

    compareWithBaseline(specName: string = 'multi-combobox'): any {
        return super.compareWithBaseline(specName, this.getScreenshotFolder());
    }
}
