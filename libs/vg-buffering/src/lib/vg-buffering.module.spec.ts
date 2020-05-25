import { async, TestBed } from '@angular/core/testing';
import { VgBufferingModule } from './vg-buffering.module';

describe('VgBufferingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgBufferingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgBufferingModule).toBeDefined();
  });
});
