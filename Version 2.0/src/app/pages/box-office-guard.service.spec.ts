import { TestBed } from '@angular/core/testing';

import { BoxOfficeGuardService } from './box-office-guard.service';

describe('BoxOfficeGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxOfficeGuardService = TestBed.get(BoxOfficeGuardService);
    expect(service).toBeTruthy();
  });
});
