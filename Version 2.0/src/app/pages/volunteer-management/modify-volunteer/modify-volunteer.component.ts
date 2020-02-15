import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { VolunteerManagementService } from '../volunteer-management.service';

@Component({
  selector: 'ngx-modify-volunteer',
  templateUrl: './modify-volunteer.component.html',
  styleUrls: ['./modify-volunteer.component.scss']
})
export class ModifyVolunteerComponent implements OnInit {
  ngOnInit() {
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      email: {
        title: 'Email',
        type: 'string',
      },
      fName: {
        title: 'First Name',
        type: 'string',
      },
      lName: {
        title: 'Last Name',
        type: 'string',
      },
    gender: {
        title: 'Gender',
        type: 'string',
      },
     
    dob: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source;

  constructor(private volunteerManagementService:VolunteerManagementService) {
    volunteerManagementService.getAll().subscribe(result=>{
      this.source=result})
  }

  onSaveConfirm(event):void{
    if (window.confirm('Are you sure you want to edit?')) {
      // event.confirm.resolve();
      // this.driverManagementService.delete(event.data.id)
      this.volunteerManagementService.edit(event.data.id,event.newData)
      // console.log(event.data)
      // console.log(event.newData)
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      // event.confirm.resolve();
      this.volunteerManagementService.delete(event.data.id)
      // console.log(event.data.id)
    } else {
      event.confirm.reject();
    }
  }
}


  


