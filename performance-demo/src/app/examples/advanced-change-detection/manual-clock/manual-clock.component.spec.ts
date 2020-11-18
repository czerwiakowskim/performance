import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualClockComponent } from './manual-clock.component';

describe('ManualClockComponent', () => {
  let component: ManualClockComponent;
  let fixture: ComponentFixture<ManualClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
