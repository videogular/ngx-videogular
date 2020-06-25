import { async, TestBed } from '@angular/core/testing';
import { StreamingModule } from './streaming.module';

describe('VgStreamingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StreamingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StreamingModule).toBeDefined();
  });
});
