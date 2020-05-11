import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgScrubBarCuePointsComponent } from './vg-scrub-bar-cue-points.component';

describe('VgScrubBarCuePointsComponent', () => {
  let component: VgScrubBarCuePointsComponent;
  let fixture: ComponentFixture<VgScrubBarCuePointsComponent>;

  beforeEach(async(() => {
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
