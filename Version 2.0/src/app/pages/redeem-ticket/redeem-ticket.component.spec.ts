import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemTicketComponent } from './redeem-ticket.component';

describe('RedeemTicketComponent', () => {
  let component: RedeemTicketComponent;
  let fixture: ComponentFixture<RedeemTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
