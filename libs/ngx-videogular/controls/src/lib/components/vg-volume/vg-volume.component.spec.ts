import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VgVolumeComponent } from './vg-volume.component';

describe('VgVolumeComponent', () => {
  let component: VgVolumeComponent;
  let fixture: ComponentFixture<VgVolumeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VgVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
