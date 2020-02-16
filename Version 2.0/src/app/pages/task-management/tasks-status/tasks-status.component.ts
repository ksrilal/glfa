import { Component, OnInit, OnDestroy } from "@angular/core";
import { TaskManagementService } from "../task-management.service";

@Component({
  selector: "ngx-tasks-status",
  templateUrl: "./tasks-status.component.html",
  styleUrls: ["./tasks-status.component.scss"]
})
export class TasksStatusComponent implements OnDestroy {
  //smart table headers and values
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
      task: {
        title: "Task",
        type: "string"
      },
      status: {
        title: "Status",
        type: "string"
      },
      requestedBy: {
        title: "Request By",
        type: "string"
      },
      noOfVolunteers: {
        title: "No Of Volunteers",
        type: "number"
      }
    }
  };
  //smart table data source
  source;
  private alive = true;

  tasks_set = ([] = []);
  type = "month";
  types = ["week", "month", "year"];
  currentTheme: string;
  volunteers: any[];

  constructor(private taskManagementService: TaskManagementService) {
    this.getTask(this.type);
    //for smart table
    taskManagementService.getAll().subscribe(result => {
      this.source = result;
    });
  }

  getTask(period: string) {
    this.taskManagementService.getAll().subscribe(result => {
      this.tasks_set = result;
      console.log(this.tasks_set);
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
  onSaveConfirm(event): void {
    if (window.confirm("Are you sure you want to edit?")) {
      this.taskManagementService.edit(event.data.id, event.newData);
      // console.log(event.data)
      // console.log(event.newData)
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // event.confirm.resolve();
      this.taskManagementService.delete(event.data.id);
      // console.log(event.data.id)
    } else {
      event.confirm.reject();
    }
  }

  selectTask(event) {
    console.log(event);
    this.taskManagementService.getVolunteers(event).subscribe(volun => {
      this.volunteers = volun;
      console.log(this.volunteers);
    });
  }
}
