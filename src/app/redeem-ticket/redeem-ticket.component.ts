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
  total = 0;
  itemCount = 0;
  orderId;

  constructor(private ticketOrderServie: TicketOrderService) {}

  ngOnInit() {}

  search(QR) {
    if (QR.value != "") {
      this.orderId = QR.value;
      this.ticketOrderServie.searchOrder(QR).subscribe(result => {
        this.total = 0;
        this.itemCount = 0;
        this.orders = result;
        result.forEach(element => {
          this.total += element.price;
          this.itemCount += element.quantity;
          // console.log(element);1
        });
      });

      this.ticketOrderServie.searchDeligate(QR).subscribe(delegate => {
        this.delegateDetials = delegate;
        this.name = this.delegateDetials.name;
        this.country = this.delegateDetials.country;
      });
    }
  }

  redeemTicket(id) {
    if (confirm("Are you sure? ")) {
      // console.log(id);
      // console.log(this.orderId);
      this.ticketOrderServie.redeemTicket(this.orderId, id);
    } else {
      // console.log("Ugjteobuhoetu");
    }
  }
  redeemAll() {
    if (confirm("Are you sure? ")) {
      this.ticketOrderServie.redeemAll(this.orderId, this.orders);
    } else {
      // console.log("Ugjteobuhoetu");
    }
  }
}
