import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSchedulesComponent } from './work-schedules.component';

describe('WorkSchedulesComponent', () => {
  let component: WorkSchedulesComponent;
  let fixture: ComponentFixture<WorkSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkSchedulesComponent]
    });
    fixture = TestBed.createComponent(WorkSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
