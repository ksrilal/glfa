import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilterSalesComponent } from './filter-sales.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  {
    path: "",
    component: FilterSalesComponent,
    children: [
      {
        path: "sales",
        component: SalesComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterSalesRoutingModule {}

export const routedComponents = [
  FilterSalesComponent,SalesComponent
];
