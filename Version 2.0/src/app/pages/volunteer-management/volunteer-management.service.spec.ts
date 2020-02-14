import { TestBed } from '@angular/core/testing';

import { VolunteerManagementService } from './volunteer-management.service';

describe('VolunteerManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerManagementService = TestBed.get(VolunteerManagementService);
    expect(service).toBeTruthy();
  });
});
