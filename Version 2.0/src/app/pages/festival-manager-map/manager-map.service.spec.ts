import { TestBed } from '@angular/core/testing';

import { ManagerMapService } from './manager-map.service';

describe('ManagerMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerMapService = TestBed.get(ManagerMapService);
    expect(service).toBeTruthy();
  });
});
