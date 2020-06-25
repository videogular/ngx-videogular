import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgVolumeComponent } from './vg-volume.component';

describe('VgVolumeComponent', () => {
  let component: VgVolumeComponent;
  let fixture: ComponentFixture<VgVolumeComponent>;

  beforeEach(async(() => {
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
