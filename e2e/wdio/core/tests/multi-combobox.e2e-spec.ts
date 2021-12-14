import {
    click,
    doesItExist,
    getAttributeByName,
    getElementArrayLength,
    getText,
    isElementDisplayed,
    refreshPage,
    scrollIntoView,
    sendKeys,
    setValue,
    waitForElDisplayed,
    waitForPresent
} from '../../driver/wdio';

import { MultiComboboxPo } from '../pages/multi-combobox.po';

import {
    testOptionsArray1,
    testOptionsArray2,
    testOptionsArray3,
    testOptionsArray4,
    testOptionsArray5,
    testOptionsArray6
} from '../fixtures/appData/multi-combobox-contents';

describe('Multi input test suite', () => {
    const multiComboboxPage = new MultiComboboxPo();
    const {
        activeDropdownButtons,
        activeInputs,
        disableInputs,
        options,
        multiComboboxOptions,
        buttonShowAll,
        expandedDropdown,
        hiddenAddonButtonInputOptions,
        compactMultiComboboxOptions,
        multiSelectButton,
        approveButton,
        mobileInputOptions,
        displayObjectOptions,
        searchTermOptions,
        customFilterOptions,
        asyncExampleOptions,
        tokenOptions,
        templateOptions,
        simpleExampleTokens,
        checkboxInput,
        listItem,
        popover,
        compactExampleTokens,
        dialogCheckbox
    } = multiComboboxPage;

    beforeAll(() => {
        multiComboboxPage.open();
        waitForPresent(multiComboboxPage.title);
    }, 1);

    afterEach(() => {
        refreshPage();
        waitForPresent(multiComboboxPage.title);
    }, 1);

    it('Check RTL/LTR orientation', () => {
        multiComboboxPage.checkRtlSwitch();
    });

    it('Verify inputs should have placeholder', () => {
        const activeInputsLength = getElementArrayLength(activeInputs);
        for (let i = 0; i < activeInputsLength; i++) {
            if (i === 9 || i === 10) {
                continue;
            }
            scrollIntoView(activeInputs, i);
            expect(getAttributeByName(activeInputs, 'placeholder', i)).toBe('Search here...');
        }
        scrollIntoView(activeInputs, 9);
        expect(getAttributeByName(activeInputs, 'placeholder', 9)).toBe('Search Here...');
        scrollIntoView(activeInputs, 10);
        expect(getAttributeByName(activeInputs, 'placeholder', 10)).toBe('');
    });

    it('verify disabled multi inputs', () => {
        const disableInputsLength = getElementArrayLength(disableInputs);
        for (let i = 0; i < disableInputsLength; i++) {
            scrollIntoView(disableInputs, i);
            expect(getAttributeByName(disableInputs, 'class', i)).toContain('is-disabled');
        }
    });

    it('should check enter key doesnt add an empty token', () => {
        const originalTokenCount = getElementArrayLength(simpleExampleTokens);
        click(activeInputs);
        sendKeys(['Enter']);
        const newTokenCount = getElementArrayLength(simpleExampleTokens);

        expect(newTokenCount).toEqual(originalTokenCount);
    });

    it('should check MultiCombobox options stay open when clicking checkbox', () => {
        click(activeDropdownButtons);
        waitForElDisplayed(popover);
        click(checkboxInput);

        expect(isElementDisplayed(popover)).toBe(true, 'popover not displayed');
    });

    it('should check multiCombobox options close when clicking on list item', () => {
        click(activeDropdownButtons);
        waitForElDisplayed(popover);
        click(listItem);

        expect(doesItExist(popover)).toBe(false, 'popover still displayed');
    });

    it('should be able to select all tokens and delete with delete key', () => {
        scrollIntoView(compactExampleTokens);
        click(activeInputs, 3);
        sendKeys(['Control', 'a']);
        sendKeys(['Delete']);
        const newTokenCount = getElementArrayLength(compactExampleTokens);

        expect(newTokenCount).toEqual(0);
    });

    describe('Check Mobile Mode Multi Input', () => {
        it('verify Simple Multi Input by select each option', () => {
            scrollIntoView(activeDropdownButtons);
            click(activeDropdownButtons);
            scrollIntoView(options, 15);
            click(options, 15);
            click(activeDropdownButtons);
            const inputOptionsLength = getElementArrayLength(multiComboboxOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(multiComboboxOptions, i);
                expect(getText(multiComboboxOptions, i)).toBe(testOptionsArray1[i]);
            }
        });
    });

    describe('Check Hidden Addon Button', () => {
        it('verify Hidden Addon Button by select each option', () => {
            scrollIntoView(activeInputs, 1);
            setValue(activeInputs, 'to', 1);
            scrollIntoView(buttonShowAll);
            click(buttonShowAll);
            expect(waitForElDisplayed(expandedDropdown, 1)).toBe(true);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 0; i < optionsLength; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            const inputOptionsLength = getElementArrayLength(hiddenAddonButtonInputOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(hiddenAddonButtonInputOptions, i);
                expect(getText(hiddenAddonButtonInputOptions, i)).toBe(testOptionsArray2[i]);
            }
        });
    });

    describe('Check Compact Multi Input', () => {
        it('verify Compact Multi Input by select each option', () => {
            scrollIntoView(activeDropdownButtons, 1);
            const inputOptionsLength = getElementArrayLength(compactMultiComboboxOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(compactMultiComboboxOptions, i);
                expect(getText(compactMultiComboboxOptions, i)).toBe(testOptionsArray1[i]);
            }
            click(activeDropdownButtons, 1);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 0; i < optionsLength - 4; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            click(activeDropdownButtons, 1);
            for (let i = 0; i < inputOptionsLength - 4; i++) {
                scrollIntoView(compactMultiComboboxOptions, i);
                expect(getText(compactMultiComboboxOptions, i)).toBe(testOptionsArray3[i]);
            }
        });
    });

    describe('Check Mobile Mode Multi Input', () => {
        it('verify Mobile Mode Multi Input by multi select button', () => {
            scrollIntoView(activeDropdownButtons, 2);
            click(activeDropdownButtons, 2);
            click(multiSelectButton);
            click(approveButton);
            const inputOptionsLength = getElementArrayLength(mobileInputOptions);
            for (let i = 0; i < inputOptionsLength - 8; i++) {
                scrollIntoView(mobileInputOptions, i);
                expect(getText(mobileInputOptions, i)).toBe(testOptionsArray1[i]);
            }
        });

        it('verify Mobile Mode Multi Input by select each option', () => {
            scrollIntoView(activeDropdownButtons, 2);
            click(activeDropdownButtons, 2);
            const optionsLength = getElementArrayLength(dialogCheckbox);
            for (let i = 0; i < optionsLength; i++) {
                scrollIntoView(dialogCheckbox, i);
                click(dialogCheckbox, i);
            }
            click(approveButton);
            const inputOptionsLength = getElementArrayLength(mobileInputOptions);
            for (let i = 0; i < inputOptionsLength - 8; i++) {
                scrollIntoView(mobileInputOptions, i);
                expect(getText(mobileInputOptions, i)).toBe(testOptionsArray1[i]);
            }
        });
    });

    describe('Check Display Object Property', () => {
        it('verify Display Object Property by select each option', () => {
            scrollIntoView(activeDropdownButtons, 4);
            click(activeDropdownButtons, 4);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 0; i < optionsLength; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            click(activeDropdownButtons, 4);
            const inputOptionsLength = getElementArrayLength(displayObjectOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(displayObjectOptions, i);
                expect(getText(displayObjectOptions, i)).toBe(testOptionsArray4[i]);
            }
        });
    });

    describe('Check Return results including search term', () => {
        it('verify Return results including search term by clicking each option', () => {
            scrollIntoView(activeDropdownButtons, 5);
            click(activeDropdownButtons, 5);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 0; i < optionsLength; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            click(activeDropdownButtons, 5);
            const inputOptionsLength = getElementArrayLength(searchTermOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(searchTermOptions, i);
                expect(getText(searchTermOptions, i)).toBe(testOptionsArray5[i]);
            }
        });
    });

    describe('Check Custom Filter', () => {
        it('verify Custom Filter by clicking each option', () => {
            scrollIntoView(activeDropdownButtons, 6);
            click(activeDropdownButtons, 6);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 0; i < optionsLength; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            click(activeDropdownButtons, 6);
            const inputOptionsLength = getElementArrayLength(customFilterOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(customFilterOptions, i);
                expect(getText(customFilterOptions, i)).toBe(testOptionsArray5[i]);
            }
        });
    });

    describe('Check Observable Async Example', () => {
        it('verify Observable Async Example by clicking each option', () => {
            scrollIntoView(activeDropdownButtons, 7);
            click(activeDropdownButtons, 7);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 0; i < optionsLength; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            click(activeDropdownButtons, 7);
            const inputOptionsLength = getElementArrayLength(asyncExampleOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(asyncExampleOptions, i);
                expect(getText(asyncExampleOptions, i)).toBe(testOptionsArray5[i]);
            }
        });
    });

    describe('Check Multi Input in Reactive Form', () => {
        it('verify Multi Input in Reactive Form by clicking each option', () => {
            scrollIntoView(activeDropdownButtons, 8);
            click(activeDropdownButtons, 8);
            click(checkboxInput, 2);
            click(checkboxInput, 3);
            click(activeDropdownButtons, 8);
            const inputOptionsLength = getElementArrayLength(asyncExampleOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(asyncExampleOptions, i);
                expect(getText(asyncExampleOptions, i)).toBe(testOptionsArray5[i]);
            }
        });
    });

    describe('Check Adding New Tokens', () => {
        it('verify Adding New Tokens by clicking each option', () => {
            scrollIntoView(activeDropdownButtons, 9);
            click(activeDropdownButtons, 9);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 0; i < optionsLength; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            click(activeDropdownButtons, 9);
            const inputOptionsLength = getElementArrayLength(tokenOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(tokenOptions, i);
                expect(getText(tokenOptions, i)).toBe(testOptionsArray1[i]);
            }
        });
    });

    describe('Check Custom Item Template', () => {
        it('verify Custom Item Template by clicking each option', () => {
            scrollIntoView(activeDropdownButtons, 10);
            click(activeDropdownButtons, 10);
            const optionsLength = getElementArrayLength(checkboxInput);
            for (let i = 5; i < optionsLength; i++) {
                scrollIntoView(checkboxInput, i);
                click(checkboxInput, i);
            }
            click(activeDropdownButtons, 10);
            const inputOptionsLength = getElementArrayLength(templateOptions);
            for (let i = 0; i < inputOptionsLength; i++) {
                scrollIntoView(templateOptions, i);
                expect(getText(templateOptions, i)).toBe(testOptionsArray6[i]);
            }
        });
    });

    xdescribe('Check visual regression', () => {
        it('should check examples visual regression', () => {
            multiComboboxPage.saveExampleBaselineScreenshot();
            expect(multiComboboxPage.compareWithBaseline()).toBeLessThan(5);
        });
    });
});
