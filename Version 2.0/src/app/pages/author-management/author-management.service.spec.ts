import { TestBed } from '@angular/core/testing';

import { AuthorManagementService } from './author-management.service';

describe('AuthorManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorManagementService = TestBed.get(AuthorManagementService);
    expect(service).toBeTruthy();
  });
});
