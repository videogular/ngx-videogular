import { TestBed } from '@angular/core/testing';

import { VgStates } from './vg-states.service';

describe('VgStatesService', () => {
  let service: VgStates;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VgStates);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
