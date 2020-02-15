import { TestBed } from '@angular/core/testing';

import { VolunteerGuardService } from './volunteer-guard.service';

describe('VolunteerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerGuardService = TestBed.get(VolunteerGuardService);
    expect(service).toBeTruthy();
  });
});
