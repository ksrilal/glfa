import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { TranpotationMapComponent } from "./tranpotation-map.component";

const routes: Routes = [
  {
    path: "",
    component: TranpotationMapComponent,
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
export class TranspotationMapRoutingModule {}

export const routedComponents = [TranpotationMapComponent, MapComponent];
