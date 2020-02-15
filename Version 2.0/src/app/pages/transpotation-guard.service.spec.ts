import { TestBed } from '@angular/core/testing';

import { TranspotationGuardService } from './transpotation-guard.service';

describe('TranspotationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranspotationGuardService = TestBed.get(TranspotationGuardService);
    expect(service).toBeTruthy();
  });
});
