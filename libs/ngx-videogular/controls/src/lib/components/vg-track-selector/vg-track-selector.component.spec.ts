import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VgTrackSelectorComponent } from './vg-track-selector.component';

describe('VgTrackSelectorComponent', () => {
  let component: VgTrackSelectorComponent;
  let fixture: ComponentFixture<VgTrackSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VgTrackSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgTrackSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
