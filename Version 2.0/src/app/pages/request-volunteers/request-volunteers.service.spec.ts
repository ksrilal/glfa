import { TestBed } from '@angular/core/testing';

import { RequestVolunteersService } from './request-volunteers.service';

describe('RequestVolunteersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestVolunteersService = TestBed.get(RequestVolunteersService);
    expect(service).toBeTruthy();
  });
});
