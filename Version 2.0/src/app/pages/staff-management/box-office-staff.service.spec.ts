import { TestBed } from '@angular/core/testing';

import { BoxOfficeStaffService } from './box-office-staff.service';

describe('BoxOfficeStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxOfficeStaffService = TestBed.get(BoxOfficeStaffService);
    expect(service).toBeTruthy();
  });
});
