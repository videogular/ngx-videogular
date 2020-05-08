import { TestBed } from '@angular/core/testing';

import { VgFullscreenApiService } from './vg-fullscreen-api.service';

describe('VgFullscreenApiService', () => {
  let service: VgFullscreenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VgFullscreenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
