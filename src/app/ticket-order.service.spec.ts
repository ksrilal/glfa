import { TestBed } from '@angular/core/testing';

import { TicketOrderService } from './ticket-order.service';

describe('TicketOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketOrderService = TestBed.get(TicketOrderService);
    expect(service).toBeTruthy();
  });
});
