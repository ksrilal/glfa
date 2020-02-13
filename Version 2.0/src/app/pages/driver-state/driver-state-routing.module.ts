import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DriverStateComponent } from "./driver-state.component";
import { ViewDriversComponent } from "./view-drivers/view-drivers.component";

const routes: Routes = [
  {
    path: "",
    component: DriverStateComponent,
    children: [
      {
        path: "view-drivers",
        component: ViewDriversComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverStateRoutingModule {}

export const routedComponents = [
  DriverStateComponent,
  ViewDriversComponent
];
