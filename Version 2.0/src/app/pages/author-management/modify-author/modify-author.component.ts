import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { AuthorManagementService } from '../author-management.service';

@Component({
  selector: 'ngx-modify-author',
  templateUrl: './modify-author.component.html',
  styleUrls: ['./modify-author.component.scss']
})
export class ModifyAuthorComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
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
      email: {
        title: 'E-mail',
        type: 'string',
      },
      des: {
        title: 'Description',
        type: 'String',
      },
      mobile: {
        title: 'Mobile',
        type: 'String',
      },
    },
  };

  source;

  constructor(private authorManagement: AuthorManagementService) {
    authorManagement.getAll().subscribe(result => {
      this.source = result
    })
  }

  onSaveConfirm(event): void {
    if (event.newData.fname != "" && event.newData.lname !="" && event.newData.email !="" && event.newData.des !="" && event.newData.mobile !="") {
      if (window.confirm('Are you sure you want to edit?')) {
        // event.confirm.resolve();
        this.authorManagement.edit(event.data.id, event.newData)
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
      this.authorManagement.delete(event.data.id)
      // console.log(event.data.id)
    } else {
      event.confirm.reject();
    }
  }
}
