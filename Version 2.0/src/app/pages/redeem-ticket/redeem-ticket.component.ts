import { Component, OnInit } from '@angular/core';

@Component({
  selector: "ngx-redeem-ticket",
  templateUrl: "./redeem-ticket.component.html",
  styleUrls: ["./redeem-ticket.component.scss"]
})
export class RedeemTicketComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  scanItem() {
    let QR = (<HTMLInputElement>document.getElementById("code")).value;
    console.log(QR);
    if (QR != "") {
      // this.checkoutService.scanItem(QR).subscribe(result => {
      //   // this.orders = result;
      //   // this.total = +this.orders.price;
      //   this.productName = result["product_name"];

      //   // this.myCart=result;
      //   this.checkoutService.addToCart(result);
      // });
    }
    (<HTMLInputElement>document.getElementById("code")).value = "";
  }
}
