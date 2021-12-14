import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiComboboxMobileComponent } from './multi-combobox-mobile.component';
import { MobileModeConfig } from '@fundamental-ngx/core/mobile-mode';
import { DynamicComponentService } from '@fundamental-ngx/core/utils';
import { EventEmitter } from '@angular/core';
import { DialogModule } from '@fundamental-ngx/core/dialog';
import { MultiComboboxComponent } from '../multi-combobox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MULTI_INPUT_COMPONENT } from '../multi-combobox.interface';

describe('MultiComboboxMobileComponent', () => {
    let component: MultiComboboxMobileComponent;
    let anyComponent: any;
    let fixture: ComponentFixture<MultiComboboxMobileComponent>;

    const multiComboboxConfigObject: MobileModeConfig = {
        title: 'title',
        approveButtonText: 'approve',
        cancelButtonText: 'cancel',
        hasCloseButton: true
    };

    const backupData: any[] = ['option 1', 'option 2', 'option 3'];

    let mockedMultiComboboxComponent: Partial<MultiComboboxComponent> = {
        selected: backupData,
        mobileConfig: multiComboboxConfigObject,
        dialogDismiss: (backupArguments: any[]) => {},
        selectAllItems: () => {},
        dialogApprove: () => {},
        openChange: new EventEmitter<boolean>()
    };

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [DialogModule, BrowserAnimationsModule],
                declarations: [MultiComboboxMobileComponent],
                providers: [
                    DynamicComponentService,
                    { provide: MULTI_INPUT_COMPONENT, useValue: mockedMultiComboboxComponent }
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        mockedMultiComboboxComponent = {
            selected: backupData,
            mobileConfig: {
                title: 'title',
                approveButtonText: 'approve',
                cancelButtonText: 'cancel',
                hasCloseButton: true
            },
            dialogDismiss: (backupArguments: any[]) => {},
            selectAllItems: () => {},
            dialogApprove: () => {},
            openChange: new EventEmitter<boolean>()
        };
        fixture = TestBed.createComponent(MultiComboboxMobileComponent);
        component = fixture.componentInstance;
        anyComponent = <any>component;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get multi input config, when it is passed by input', () => {
        expect(anyComponent.mobileConfig).toEqual(multiComboboxConfigObject);
    });

    it('should open and close with approve', () => {
        component.ngOnInit();
        component.ngAfterViewInit();
        spyOn(anyComponent.dialogRef._onHide, 'next');
        spyOn(anyComponent._component, 'dialogApprove');
        fixture.detectChanges();
        expect(anyComponent._dialogService.hasOpenDialogs()).toBe(true);
        anyComponent._component.openChange.emit(true);
        fixture.detectChanges();
        expect(anyComponent.dialogRef._onHide.next).toHaveBeenCalledWith(false);
        component.handleApprove();
        expect(anyComponent._component.dialogApprove).toHaveBeenCalled();
    });

    it('should open and close with dismiss', () => {
        component.ngOnInit();
        component.ngAfterViewInit();
        spyOn(anyComponent.dialogRef._onHide, 'next');
        spyOn(anyComponent._component, 'dialogDismiss');
        fixture.detectChanges();
        expect(anyComponent._dialogService.hasOpenDialogs()).toBe(true);
        anyComponent._component.selected = [];
        anyComponent._component.openChange.emit(true);
        fixture.detectChanges();
        expect(anyComponent.dialogRef._onHide.next).toHaveBeenCalledWith(false);
        component.handleDismiss();
        expect(anyComponent._component.dialogDismiss).toHaveBeenCalledWith([]);
    });
});
