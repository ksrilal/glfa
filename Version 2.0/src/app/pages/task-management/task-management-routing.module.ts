import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskManagementComponent } from "./task-management.component";
import { AssignTasksComponent } from "./assign-tasks/assign-tasks.component";
import { TasksStatusComponent } from "./tasks-status/tasks-status.component";

const routes: Routes = [
  {
    path: "",
    component: TaskManagementComponent,
    children: [
      {
        path: "assign-tasks",
        component: AssignTasksComponent
      },
      {
        path: "tasks-status",
        component: TasksStatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule {}

export const routedComponents = [
  TaskManagementComponent,
  AssignTasksComponent,
  TasksStatusComponent
];
