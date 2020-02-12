import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { StaffManagementComponent } from './staff-management.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ModifyStaffComponent } from './modify-staff/modify-staff.component';

const routes: Routes = [
  {
    path: "",
    component: StaffManagementComponent,
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
export class StaffManagementRoutingModule {}

export const routedComponents = [
  StaffManagementComponent,
  AddStaffComponent,
  ModifyStaffComponent
];
