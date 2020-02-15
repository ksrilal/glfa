import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FestivalManagerMapComponent } from './festival-manager-map.component';
import { ManagerMapComponent } from './manager-map/manager-map.component';


const routes: Routes = [
  {
    path: "",
    component: FestivalManagerMapComponent,
    children: [
      {
        path: "map",
        component: ManagerMapComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerMapRoutingModule {}

export const routedComponents = [
  FestivalManagerMapComponent,ManagerMapComponent
];
