import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketManagementComponent } from './ticket-management.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {
    path: "",
    component: TicketManagementComponent,
    children: [
      {
        path: "summary",
        component: SummaryComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketManagementRoutingModule {}

export const routedComponents = [
  TicketManagementComponent,SummaryComponent
];
