import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineGroupControlComponent } from './timeline-group-control.component';

describe('GroupControlComponent', () => {
  let component: TimelineGroupControlComponent;
  let fixture: ComponentFixture<TimelineGroupControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineGroupControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineGroupControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
