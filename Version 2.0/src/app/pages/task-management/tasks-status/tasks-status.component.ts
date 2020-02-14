import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { TaskManagementService } from '../task-management.service';

@Component({
  selector: 'ngx-tasks-status',
  templateUrl: './tasks-status.component.html',
  styleUrls: ['./tasks-status.component.scss']
})
export class TasksStatusComponent implements OnDestroy {
  //smart table features
 /* ngOnInit(): void {
    throw new Error("Method not implemented.");
  }*/

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
      task: {
        title: 'Task',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      location: {
        title: 'Status',
        type: 'string',
      },
      user: {
        title: 'Request By',
        type: 'string',
      },
      noOfVolunteers: {
        title: 'No Of Volunteers',
        type: 'number',
      },
      date_from: {
        title: 'From(Date)',
        type: 'date',
      },
      date_to: {
        title: 'To(Date)',
        type: 'date',
      },

    },
  };
  //smart table data source
  source;
  private alive = true;

  userActivity=[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData,
              private service: SmartTableData,
              private taskManagementService:TaskManagementService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
    //for smart table
    taskManagementService.getAll().subscribe(result=>{
      this.source=result
    })
    
  }



  getUserActivity(period: string) {
    // this.userActivityService.getUserActivityData(period)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(userActivityData => {
    //     this.userActivity = userActivityData;
    //     console.log(this.userActivity)
    //   });
    this.taskManagementService.getAll().subscribe(result=>{
      this.userActivity=result;
      console.log(this.userActivity)
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }
  onSaveConfirm(event):void{
    if (window.confirm('Are you sure you want to edit?')) {
      // event.confirm.resolve();
      // this.driverManagementService.delete(event.data.id)
      this.taskManagementService.edit(event.data.id,event.newData)
      // console.log(event.data)
      // console.log(event.newData)
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      // event.confirm.resolve();
      this.taskManagementService.delete(event.data.id)
      // console.log(event.data.id)
    } else {
      event.confirm.reject();
    }
  }

}
