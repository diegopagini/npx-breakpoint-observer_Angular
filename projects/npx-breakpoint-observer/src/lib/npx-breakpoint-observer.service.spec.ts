import { TestBed } from '@angular/core/testing';

import { NpxBreakpointObserverService } from './npx-breakpoint-observer.service';

describe('NpxBreakpointObserverService', () => {
  let service: NpxBreakpointObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpxBreakpointObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
