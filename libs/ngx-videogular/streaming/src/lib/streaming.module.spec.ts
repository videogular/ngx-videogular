import { TestBed, waitForAsync } from '@angular/core/testing';
import { VgStreamingModule } from './streaming.module';

describe('VgStreamingModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VgStreamingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgStreamingModule).toBeDefined();
  });
});
