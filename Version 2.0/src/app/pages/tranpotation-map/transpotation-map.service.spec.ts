import { TestBed } from '@angular/core/testing';

import { TranspotationMapService } from './transpotation-map.service';

describe('TranspotationMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranspotationMapService = TestBed.get(TranspotationMapService);
    expect(service).toBeTruthy();
  });
});
