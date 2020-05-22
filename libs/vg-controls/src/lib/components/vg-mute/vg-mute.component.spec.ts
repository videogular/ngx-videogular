import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgMuteComponent } from './vg-mute.component';

describe('VgMuteComponent', () => {
  let component: VgMuteComponent;
  let fixture: ComponentFixture<VgMuteComponent>;

  beforeEach(async(() => {
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
