import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DriverManagementComponent } from './driver-management.component';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { ModifyDriversComponent } from './modify-drivers/modify-drivers.component';


const routes: Routes = [
  {
    path: "",
    component: DriverManagementComponent,
    children: [
      {
        path: "add-driver",
        component: AddDriversComponent
      },
      {
        path: "modify-driver",
        component: ModifyDriversComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverManagementRoutingModule {}

export const routedComponents = [
  DriverManagementComponent,AddDriversComponent,ModifyDriversComponent
];
