import { async, TestBed } from '@angular/core/testing';
import { VgControlsModule } from './controls.module';

describe('VgControlsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgControlsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgControlsModule).toBeDefined();
  });
});
