import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { FestivalStaffManagementService } from '../festival-staff-management.service';

@Component({
  selector: 'ngx-modify-staff',
  templateUrl: './modify-staff.component.html',
  styleUrls: ['./modify-staff.component.scss']
})
export class ModifyStaffComponent implements OnInit {

  ngOnInit(){
    
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
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      fname: {
        title: 'First Name',
        type: 'string',
      },
      lname: {
        title: 'Last Name',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
      mobile: {
        title: 'Mobile',
        type: 'String',
      },
    },
  };

  source;

  constructor(private FestivalStaffManagementService: FestivalStaffManagementService) {
    FestivalStaffManagementService.getAll().subscribe(result=>{
      this.source=result
    })
  }

  onSaveConfirm(event):void{
    if (event.newData.fname !="" && event.newData.lname !="" && event.newData.gender !="" && event.newData.email !="" && event.newData.role !="" && event.newData.mobile !="" && event.newData.email.includes('@') && event.newData.email.includes('.com') && event.newData.mobile.length == 10 && !event.newData.mobile.match(/[a-z]/i)){
      if (window.confirm('Are you sure you want to edit?')) {
      // event.confirm.resolve();
      this.FestivalStaffManagementService.edit(event.data.id,event.newData)
      //console.log(event.data)
      // console.log(event.newData)
    } else {
      event.confirm.reject();
    }
    }else{
      alert("ERROR!")
  }

    
  }

  onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        // event.confirm.resolve();
        this.FestivalStaffManagementService.delete(event.data.id)
        // console.log(event.data.id)
      } else {
        event.confirm.reject();
      }
    }
  }


