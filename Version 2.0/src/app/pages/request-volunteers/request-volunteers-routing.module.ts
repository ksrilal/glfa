import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RequestVolunteersComponent } from './request-volunteers.component';
import { ReqVolunteersComponent } from './req-volunteers/req-volunteers.component';


const routes: Routes = [
  {
    path: "",
    component: RequestVolunteersComponent,
    children: [
      {
        path: "req-volunteers",
        component: ReqVolunteersComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestVolunteersRoutingModule {}

export const routedComponents = [
  RequestVolunteersComponent,
  ReqVolunteersComponent
];
