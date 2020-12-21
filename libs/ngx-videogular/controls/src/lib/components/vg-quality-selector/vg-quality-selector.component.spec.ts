import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VgQualitySelectorComponent } from './vg-quality-selector.component';

describe('VgQualitySelectorComponent', () => {
  let component: VgQualitySelectorComponent;
  let fixture: ComponentFixture<VgQualitySelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VgQualitySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgQualitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
