import { Component, OnInit } from "@angular/core";
import { SalesService } from "./sales.service";
import { ExportToCsv } from "export-to-csv";

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
  p = [
  {
    name: 'Test 1',
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
];

  csv:any[]=[];

  options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "My Awesome CSV",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    header:['Country','Name']
  };
  csvExporter = new ExportToCsv(this.options);

  constructor(salesService: SalesService) {
    salesService.getAll().subscribe(data => {
      this.data = data;
      data.forEach(element => {
        this.csv.push(element);
      });

    });
    console.log(this.csv);
    console.log(this.p);
  }

  ngOnInit() {}
  generate() {
    this.csvExporter.generateCsv(this.csv);
  }
}
