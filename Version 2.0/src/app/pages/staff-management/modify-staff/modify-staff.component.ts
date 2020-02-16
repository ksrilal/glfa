import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { BoxOfficeStaffService } from "../box-office-staff.service";

@Component({
  selector: "ngx-modify-staff",
  templateUrl: "./modify-staff.component.html",
  styleUrls: ["./modify-staff.component.scss"]
})
export class ModifyStaffComponent implements OnInit {
  ngOnInit() {}

  settings = {
    actions: {
      add: false
    },

    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      // id: {
      //   title: "ID",
      //   type: "number"
      // },
      firstName: {
        title: "First Name",
        type: "string"
      },
      lastName: {
        title: "Last Name",
        type: "string"
      },
      mobile: {
        title: "Mobile",
        type: "string"
      },
      email: {
        title: "E-mail",
        type: "string"
      }
      // age: {
      //   title: "Age",
      //   type: "number"
      // }
    }
  };

  source;

  constructor(private boxOfficeStaffService: BoxOfficeStaffService) {
    boxOfficeStaffService.getAll().subscribe(result => {
      this.source = result;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (
      event.newData.firstName != "" &&
      event.newData.lastName != "" &&
      event.newData.email != "" &&
      event.newData.mobile != "" &&
      event.newData.email.includes("@") &&
      event.newData.email.includes(".com") &&
      event.newData.mobile.length == 10 &&
      !event.newData.mobile.match(/[a-z]/i)
    ) {
      if (window.confirm("Are you sure you want to edit?")) {
        this.boxOfficeStaffService.edit(event.data.id, event.newData);
      } else {
        event.confirm.reject();
      }
    } else {
      alert("ERROR!");
    }
  }
}
