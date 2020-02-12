import { TestBed } from '@angular/core/testing';

import { AddDriversService } from './add-drivers.service';

describe('AddDriversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDriversService = TestBed.get(AddDriversService);
    expect(service).toBeTruthy();
  });
});
