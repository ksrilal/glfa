import { TestBed } from '@angular/core/testing';

import { DriverStateService } from './driver-state.service';

describe('DriverStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverStateService = TestBed.get(DriverStateService);
    expect(service).toBeTruthy();
  });
});
