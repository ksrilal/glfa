import { TestBed } from '@angular/core/testing';

import { AddVolunteerService } from './add-volunteer.service';

describe('AddVolunteerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddVolunteerService = TestBed.get(AddVolunteerService);
    expect(service).toBeTruthy();
  });
});
