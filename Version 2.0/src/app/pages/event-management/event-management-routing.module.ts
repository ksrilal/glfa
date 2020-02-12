import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventManagementComponent } from './event-management.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ModifyEventComponent } from './modify-event/modify-event.component';


const routes: Routes = [
  {
    path: "",
    component: EventManagementComponent,
    children: [
      {
        path: "add-event",
        component: AddEventComponent
      },
      {
        path: "modify-event",
        component: ModifyEventComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventManagementRoutingModule {}

export const routedComponents = [
  EventManagementComponent,AddEventComponent,ModifyEventComponent
];
