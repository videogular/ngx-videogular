import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VgMuteComponent } from './vg-mute.component';

describe('VgMuteComponent', () => {
  let component: VgMuteComponent;
  let fixture: ComponentFixture<VgMuteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VgMuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgMuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
