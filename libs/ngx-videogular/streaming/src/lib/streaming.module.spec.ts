import { async, TestBed } from '@angular/core/testing';
import { VgStreamingModule } from './streaming.module';

describe('VgStreamingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgStreamingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgStreamingModule).toBeDefined();
  });
});
