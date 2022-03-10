import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsListPostfixComponent } from './tabs-list-postfix.component';

describe('TabsListPostfixComponent', () => {
    let component: TabsListPostfixComponent;
    let fixture: ComponentFixture<TabsListPostfixComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TabsListPostfixComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TabsListPostfixComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
