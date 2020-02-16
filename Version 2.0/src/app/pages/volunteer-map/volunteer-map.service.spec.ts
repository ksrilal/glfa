import { TestBed } from '@angular/core/testing';

import { VolunteerMapService } from './volunteer-map.service';

describe('VolunteerMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerMapService = TestBed.get(VolunteerMapService);
    expect(service).toBeTruthy();
  });
});
