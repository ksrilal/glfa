import { TestBed } from '@angular/core/testing';

import { TicketManagementService } from './ticket-management.service';

describe('TicketManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketManagementService = TestBed.get(TicketManagementService);
    expect(service).toBeTruthy();
  });
});
