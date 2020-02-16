import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { FilterSalesService } from "../filter-sales.service";

@Component({
  selector: "ngx-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"]
})
export class SalesComponent implements OnInit {
  ngOnInit() {}
  settings = {
    actions: false,
    columns: {
      author: {
        title: "Author",
        type: "string"
      },
      event: {
        title: "Event",
        type: "string"
      },
      price: {
        title: "Ticekt Price",
        type: "string"
      },
      quantity: {
        title: "Quantity",
        type: "string"
      },
      totalPrice: {
        title: "Total",
        type: "string"
      },
      age: {
        title: "Age",
        type: "number"
      }
    }
  };

  source;

  dates = ([] = []);

  constructor(private filterService: FilterSalesService) {
    filterService.getDates().subscribe(dates => {
      dates.forEach(element => {
        this.dates.push(element["day"]);
      });
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  selectDate(event) {
    console.log(event);
    this.filterService.getSales(event).subscribe(result => {
      this.source = result;
    });
  }
}
