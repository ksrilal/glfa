import { TestBed } from '@angular/core/testing';

import { RedeemTicketService } from './redeem-ticket.service';

describe('RedeemTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedeemTicketService = TestBed.get(RedeemTicketService);
    expect(service).toBeTruthy();
  });
});
