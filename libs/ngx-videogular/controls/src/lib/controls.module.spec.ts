import { async, TestBed } from '@angular/core/testing';
import { ControlsModule } from './controls.module';

describe('VgControlsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ControlsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ControlsModule).toBeDefined();
  });
});
