import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgPlaybackButtonComponent } from './vg-playback-button.component';

describe('VgPlaybackButtonComponent', () => {
  let component: VgPlaybackButtonComponent;
  let fixture: ComponentFixture<VgPlaybackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgPlaybackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgPlaybackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
