import { TestBed } from '@angular/core/testing';

import { NpxVideogularService } from './npx-videogular.service';

describe('NpxVideogularService', () => {
  let service: NpxVideogularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpxVideogularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
