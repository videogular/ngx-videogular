import { TestBed } from '@angular/core/testing';

import { VgUtilsService } from './vg-utils.service';

describe('VgUtilsService', () => {
  let service: VgUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VgUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
