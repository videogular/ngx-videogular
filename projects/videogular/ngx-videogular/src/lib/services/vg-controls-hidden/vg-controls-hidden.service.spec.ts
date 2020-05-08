import { TestBed } from '@angular/core/testing';

import { VgControlsHiddenService } from './vg-controls-hidden.service';

describe('VgControlsHiddenService', () => {
  let service: VgControlsHiddenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VgControlsHiddenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
