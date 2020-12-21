import { TestBed, waitForAsync } from '@angular/core/testing';
import { VgCoreModule } from './core.module';

describe('VgCoreModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VgCoreModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgCoreModule).toBeDefined();
  });
});
