import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VgScrubBarCuePointsComponent } from './vg-scrub-bar-cue-points.component';

describe('VgScrubBarCuePointsComponent', () => {
  let component: VgScrubBarCuePointsComponent;
  let fixture: ComponentFixture<VgScrubBarCuePointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VgScrubBarCuePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgScrubBarCuePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
