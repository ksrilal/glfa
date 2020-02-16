import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { DriverManagementService } from "../driver-management.service";

@Component({
  selector: "ngx-modify-drivers",
  templateUrl: "./modify-drivers.component.html",
  styleUrls: ["./modify-drivers.component.scss"]
})
export class ModifyDriversComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
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
      nic: {
        title: "NIC",
        type: "string"
      },
      fname: {
        title: "First Name",
        type: "string"
      },
      lname: {
        title: "Last Name",
        type: "string"
      },
      vehbrand: {
        title: "Vehicle Brand",
        type: "string"
      },
      vehmodel: {
        title: "Vehicle  Model",
        type: "string"
      },
      vehnum: {
        title: "Vehicle Number",
        type: "string"
      }
    }
  };

  source;

  constructor(private driverManagementService: DriverManagementService) {
    driverManagementService.getAll().subscribe(result => {
      this.source = result;
    });
  }

  onSaveConfirm(event): void {
    if (window.confirm("Are you sure you want to edit?")) {
      // event.confirm.resolve();
      // this.driverManagementService.delete(event.data.id)
      this.driverManagementService.edit(event.data.id, event.newData);
      // console.log(event.data)
      // console.log(event.newData)
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // event.confirm.resolve();
      this.driverManagementService.delete(event.data.id);
      // console.log(event.data.id)
    } else {
      event.confirm.reject();
    }
  }
}
