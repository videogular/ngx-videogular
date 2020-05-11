import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgScrubBarCurrentTimeComponent } from './vg-scrub-bar-current-time.component';

describe('VgScrubBarCurrentTimeComponent', () => {
  let component: VgScrubBarCurrentTimeComponent;
  let fixture: ComponentFixture<VgScrubBarCurrentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgScrubBarCurrentTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgScrubBarCurrentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
