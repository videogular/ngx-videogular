import { TestBed, waitForAsync } from '@angular/core/testing';
import { VgBufferingModule } from './buffering.module';

describe('VgBufferingModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VgBufferingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgBufferingModule).toBeDefined();
  });
});
