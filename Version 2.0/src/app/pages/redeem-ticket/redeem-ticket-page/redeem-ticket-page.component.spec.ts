import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemTicketPageComponent } from './redeem-ticket-page.component';

describe('RedeemTicketPageComponent', () => {
  let component: RedeemTicketPageComponent;
  let fixture: ComponentFixture<RedeemTicketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemTicketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
