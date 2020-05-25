import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgPlayPauseComponent } from './vg-play-pause.component';

describe('VgPlayPauseComponent', () => {
  let component: VgPlayPauseComponent;
  let fixture: ComponentFixture<VgPlayPauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgPlayPauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgPlayPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
