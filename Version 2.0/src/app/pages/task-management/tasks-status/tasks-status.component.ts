import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-tasks-status',
  templateUrl: './tasks-status.component.html',
  styleUrls: ['./tasks-status.component.scss']
})
export class TasksStatusComponent implements OnDestroy {
  //smart table features
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
      id: {
        title: 'ID',
        type: 'number',
      },
      task: {
        title: 'Task',
        type: 'string',
      },
      lastName: {
        title: 'Status',
        type: 'string',
      },
      username: {
        title: 'Request By',
        type: 'string',
      },
      email: {
        title: 'Location',
        type: 'string',
      },
      age: {
        title: 'Date',
        type: 'number',
      },
    },
  };
  //smart table data source
  source: LocalDataSource = new LocalDataSource();
  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData,
              private service: SmartTableData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
    //for smart table
    const data = this.service.getData();
    this.source.load(data);
  }



  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
