import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VolunteerManagementComponent } from "./volunteer-management.component";
import { AddVolunteerComponent } from "./add-volunteer/add-volunteer.component";
import { ModifyVolunteerComponent } from "./modify-volunteer/modify-volunteer.component";
import { FindVolunteerComponent } from "./find-volunteer/find-volunteer.component";

const routes: Routes = [
  {
    path: "",
    component: VolunteerManagementComponent,
    children: [
      {
        path: "add-volunteer",
        component: AddVolunteerComponent
      },
      {
        path: "modify-volunteer",
        component: ModifyVolunteerComponent
      },
      {
        path: "find-volunteer",
        component: FindVolunteerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerManagementRoutingModule {}

export const routedComponents = [
  VolunteerManagementComponent,
  AddVolunteerComponent,
  ModifyVolunteerComponent,
  FindVolunteerComponent
];
