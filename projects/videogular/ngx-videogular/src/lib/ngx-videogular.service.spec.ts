import { TestBed } from '@angular/core/testing';

import { NgxVideogularService } from './ngx-videogular.service';

describe('NgxVideogularService', () => {
  let service: NgxVideogularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVideogularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
