import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrDetailsComponent } from './tr-details.component';

describe('TrDetailsComponent', () => {
  let component: TrDetailsComponent;
  let fixture: ComponentFixture<TrDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrDetailsComponent]
    });
    fixture = TestBed.createComponent(TrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
