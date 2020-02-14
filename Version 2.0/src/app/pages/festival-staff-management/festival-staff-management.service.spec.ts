import { TestBed } from '@angular/core/testing';

import { FestivalStaffManagementService } from './festival-staff-management.service';

describe('FestivalStaffManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FestivalStaffManagementService = TestBed.get(FestivalStaffManagementService);
    expect(service).toBeTruthy();
  });
});
