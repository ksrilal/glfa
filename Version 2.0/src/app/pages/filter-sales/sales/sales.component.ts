import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { FilterSalesService } from "../filter-sales.service";
import { ExportToCsv } from "export-to-csv";

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
      }
      // age: {
      //   title: "Age",
      //   type: "number"
      // }
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
  options = {
    fieldSeparator: ",",
    filename: "Galle Literary Festival",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "Summary ",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    // header: ["Country", "Name"]
  };

  csvExporter = new ExportToCsv(this.options);

  generate() {
    var data = this.source;

    this.csvExporter.generateCsv(data);
  }
}
