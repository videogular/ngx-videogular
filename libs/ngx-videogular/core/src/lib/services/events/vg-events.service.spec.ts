import { TestBed } from '@angular/core/testing';

import { VgEvents } from './vg-events.service';

describe('VgEventsService', () => {
  let service: VgEvents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VgEvents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
