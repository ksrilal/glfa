import { Component, OnInit } from "@angular/core";
import { StaffService } from '../boxoffice.service';

@Component({
  selector: "app-view-staff",
  templateUrl: "./view-staff.component.html",
  styleUrls: ["./view-staff.component.scss"]
})
export class ViewStaffComponent implements OnInit {
  settings = {
    add: {
      // addButtonContent: '<i class="nb-plus"></i>',
      // createButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>'
    },

    edit: {
      // editButtonContent: '<i class="nb-edit"></i>',
      // saveButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      // deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      // id: {
      //   title: "ID"
      // },
      userName: {
        title: "Full Name"
      },
      email: {
        title: "Email"
      },
      roll: {
        title: "Roll"
      },
      mobile: {
        title: "Mobile"
      }
    }
  };
  data;

  constructor(private staffService: StaffService) {
    staffService.getAll().subscribe(member => {
      this.data = member;
    });
  }

  ngOnInit() {}

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // event.confirm.resolve();
      // console.log(event.data.email);
      this.staffService.delete(event.data.email);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (window.confirm("Are you sure you want to edit this?")) {
      // event.confirm.resolve();
      // event.newData["name"] += " + added in code";
      // console.log(event.data);
      // console.log(event.newData);

      this.staffService.edit(event.data.email, event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
