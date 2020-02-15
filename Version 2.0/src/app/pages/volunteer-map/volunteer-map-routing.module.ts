import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from './map/map.component';
import { VolunteerMapComponent } from './volunteer-map.component';



const routes: Routes = [
  {
    path: "",
    component: VolunteerMapComponent,
    children: [
      {
        path: "map",
        component: MapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerMapRoutingModule {}

export const routedComponents = [VolunteerMapComponent, MapComponent];
