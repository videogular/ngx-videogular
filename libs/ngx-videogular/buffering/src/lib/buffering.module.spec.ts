import { async, TestBed } from '@angular/core/testing';
import { BufferingModule } from './buffering.module';

describe('VgBufferingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BufferingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BufferingModule).toBeDefined();
  });
});
