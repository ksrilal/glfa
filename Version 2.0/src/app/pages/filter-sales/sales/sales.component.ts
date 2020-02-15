import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";

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
      id: {
        title: "ID",
        type: "number"
      },
      firstName: {
        title: "First Name",
        type: "string"
      },
      lastName: {
        title: "Last Name",
        type: "string"
      },
      username: {
        title: "Username",
        type: "string"
      },
      email: {
        title: "E-mail",
        type: "string"
      },
      age: {
        title: "Age",
        type: "number"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
