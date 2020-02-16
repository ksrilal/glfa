import { TestBed } from '@angular/core/testing';

import { FilterSalesService } from './filter-sales.service';

describe('FilterSalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterSalesService = TestBed.get(FilterSalesService);
    expect(service).toBeTruthy();
  });
});
