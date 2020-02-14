import { TestBed } from '@angular/core/testing';

import { DriverManagementService } from './driver-management.service';

describe('DriverManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverManagementService = TestBed.get(DriverManagementService);
    expect(service).toBeTruthy();
  });
});
