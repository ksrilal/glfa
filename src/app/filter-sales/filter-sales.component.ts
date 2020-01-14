import { Component, OnInit } from "@angular/core";
import { SalesService } from "./sales.service";

@Component({
  selector: "app-filter-sales",
  templateUrl: "./filter-sales.component.html",
  styleUrls: ["./filter-sales.component.scss"]
})
export class FilterSalesComponent implements OnInit {
  settings = {
    columns: {
      // id: {
      //   title: "ID"
      // },
      name: {
        title: "Full Name"
      },
      country: {
        title: "Country"
      },
      event: {
        title: "Event"
      },
      author: {
        title: "Author"
      },
      quantity: {
        title: "Quantity"
      },

      status: {
        title: "Redeem Status"
      }
    }
  };
  data;

  constructor(salesService: SalesService) {
    salesService.getAll().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  ngOnInit() {}
}
