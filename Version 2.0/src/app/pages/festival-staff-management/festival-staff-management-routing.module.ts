import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FestivalStaffManagementComponent } from "./festival-staff-management.component";
import { AddStaffComponent } from "./add-staff/add-staff.component";
import { ModifyStaffComponent } from "./modify-staff/modify-staff.component";

const routes: Routes = [
  {
    path: "",
    component: FestivalStaffManagementComponent,
    children: [
      {
        path: "add-staff",
        component: AddStaffComponent
      },
      {
        path: "modify-staff",
        component: ModifyStaffComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FestivalStaffManagementRoutingModule {}

export const routedComponents = [
  FestivalStaffManagementComponent,
  AddStaffComponent,
  ModifyStaffComponent
];
