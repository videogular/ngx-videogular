import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgScrubBarBufferingTimeComponent } from './vg-scrub-bar-buffering-time.component';

describe('VgScrubBarBufferingTimeComponent', () => {
  let component: VgScrubBarBufferingTimeComponent;
  let fixture: ComponentFixture<VgScrubBarBufferingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgScrubBarBufferingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgScrubBarBufferingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
