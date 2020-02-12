import { NgModule } from "@angular/core";
import { TaskManagementRoutingModule, routedComponents } from './task-management-routing.module';


@NgModule({
  imports: [TaskManagementRoutingModule],
  declarations: [...routedComponents]
})
export class TaskManagementModule {}
