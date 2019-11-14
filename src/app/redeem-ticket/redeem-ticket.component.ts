import { Component, OnInit } from "@angular/core";
import { TicketOrderService } from "../ticket-order.service";

@Component({
  selector: "app-redeem-ticket",
  templateUrl: "./redeem-ticket.component.html",
  styleUrls: ["./redeem-ticket.component.scss"]
})
export class RedeemTicketComponent implements OnInit {
  orders;
  delegateDetials;
  name;
  country;
  total=0;

  constructor(private ticketOrderServie: TicketOrderService) {}

  ngOnInit() {}

  search(QR) {
    if (QR.value != "") {
      this.ticketOrderServie.searchOrder(QR).subscribe(result => {
        this.orders = result;
        this.total=+this.orders.price;
      });

      this.ticketOrderServie.searchDeligate(QR).subscribe(delegate => {
        this.delegateDetials = delegate;
        this.name = this.delegateDetials.name;
        this.country = this.delegateDetials.country;
      });
    }
  }
}
