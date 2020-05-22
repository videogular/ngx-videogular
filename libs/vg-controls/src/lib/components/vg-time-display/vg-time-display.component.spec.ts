import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgTimeDisplayComponent } from './vg-time-display.component';

describe('VgTimeDisplayComponent', () => {
  let component: VgTimeDisplayComponent;
  let fixture: ComponentFixture<VgTimeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VgTimeDisplayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgTimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
