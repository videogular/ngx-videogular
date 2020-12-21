import { TestBed, waitForAsync } from '@angular/core/testing';
import { VgControlsModule } from './controls.module';

describe('VgControlsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VgControlsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgControlsModule).toBeDefined();
  });
});
