import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopAsyncComponent } from './loop-async.component';

describe('LoopAsyncComponent', () => {
  let component: LoopAsyncComponent;
  let fixture: ComponentFixture<LoopAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
