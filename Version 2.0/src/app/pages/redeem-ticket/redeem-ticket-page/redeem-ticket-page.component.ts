import { Component, OnInit } from "@angular/core";
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder
} from "@nebular/theme";
import { RedeemTicketService } from "../redeem-ticket.service";
import { DatePipe } from "@angular/common";

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: "ngx-redeem-ticket-page",
  templateUrl: "./redeem-ticket-page.component.html",
  styleUrls: ["./redeem-ticket-page.component.scss"]
})
export class RedeemTicketPageComponent implements OnInit {
  deligateName;
  country;
  status;
  ticketBool;
  finalDate;
  constructor(
    private redeemTicket: RedeemTicketService,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private datePipe: DatePipe
  ) {
    this.finalDate = this.datePipe.transform(Date(), "yyyyMMdd");
  }

  ngOnInit() {}
  QR;
  orderDetails = ([] = []);
  scanItem() {
    this.QR = (<HTMLInputElement>document.getElementById("code")).value;
    console.log(this.QR);
    if (this.QR != "") {
      // this.checkoutService.scanItem(QR).subscribe(result => {
      //   // this.orders = result;
      //   // this.total = +this.orders.price;
      //   this.productName = result["product_name"];
      //   // this.myCart=result;
      //   this.checkoutService.addToCart(result);
      // });
      this.redeemTicket.getData(this.QR).subscribe(result => {
        console.log(result);
        this.orderDetails = [];
        result.forEach(a => {
          a["totalPrice"] = a['ticket']["price"] * a["quantity"];
          a['price']=a['ticket']["price"];
          a["author"] = a["ticket"]["author"];
          a["event"] = a["ticket"]["name"];
          this.orderDetails.push(a);

          this.data.push({ data: a });
        });

        this.dataSource = this.dataSourceBuilder.create(this.data);
        this.data = [];
      });
      this.redeemTicket.searchDeligate(this.QR).subscribe(result => {
        this.deligateName = result["name"];
        this.country = result["country"];
        if (result["status"]) {
          this.status = "Redeemed";
          this.ticketBool = false;
        } else {
          this.status = " Not Redeemed";
          this.ticketBool = true;
        }
      });
    }
    (<HTMLInputElement>document.getElementById("code")).value = "";
  }

  customColumn = "author";
  defaultColumns = ["event", "price", "quantity", "totalPrice"];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: any[] = [];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  redeem() {
    // console.log(this.finalDate);
    if (window.confirm("Are you sure you want to redeem?")) {
      this.redeemTicket.redeemTicket(this.QR, this.orderDetails,this.finalDate);
    }
  }
}
