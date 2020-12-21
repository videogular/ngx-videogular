import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VgFullscreenComponent } from './vg-fullscreen.component';

describe('VgFullscreenComponent', () => {
  let component: VgFullscreenComponent;
  let fixture: ComponentFixture<VgFullscreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VgFullscreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
