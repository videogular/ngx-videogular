import { TestBed } from '@angular/core/testing';

import { VgApiService } from './vg-api.service';

describe('VgApiService', () => {
  let service: VgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
