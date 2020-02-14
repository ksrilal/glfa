import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { EventManagementService } from '../event-management.service';

@Component({
  selector: 'ngx-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.scss']
})
export class ModifyEventComponent implements OnInit {

  constructor(private eventManagement: EventManagementService) {
    eventManagement.getAll().subscribe(result=>{
      this.source=result
    })
   }

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
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Event Name',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      time: {
        title: 'Time',
        type: 'string',
      },
      venue: {
        title: 'Venue',
        type: 'string',
      },
      author: {
        title: 'Guest Author',
        type: 'string',
      },
      price: {
        title: 'Ticket Price',
        type: 'string',
      },
      q: {
        title: 'Time',
        type: 'string',
      },
      des: {
        title: 'Description',
        type: 'String',
      },
    },
  };

  source;

  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to edit?')) {
      this.eventManagement.edit(event.date.id,event.newData)
    }
    else{
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
  if(window.confirm('Are you sure you want to delete?')) {
    this.eventManagement.delete(event.data.id)
  }
  else{
    event.confirm.reject();
  }
  }

}
