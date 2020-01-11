import { TestBed } from '@angular/core/testing';

import { ContactDriversService } from './contact-drivers.service';

describe('ContactDriversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactDriversService = TestBed.get(ContactDriversService);
    expect(service).toBeTruthy();
  });
});
