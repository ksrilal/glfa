import { TestBed } from '@angular/core/testing';

import { StaffService } from './boxoffice.service';

describe('StaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffService = TestBed.get(StaffService);
    expect(service).toBeTruthy();
  });
});
