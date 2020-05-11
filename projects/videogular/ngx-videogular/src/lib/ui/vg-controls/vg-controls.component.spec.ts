import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgControlsComponent } from './vg-controls.component';

describe('VgControlsComponent', () => {
  let component: VgControlsComponent;
  let fixture: ComponentFixture<VgControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
