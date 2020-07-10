import { async, TestBed } from '@angular/core/testing';
import { VgCoreModule } from './core.module';

describe('VgCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgCoreModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgCoreModule).toBeDefined();
  });
});
