import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { RedeemTicketComponent } from "./redeem-ticket/redeem-ticket.component";
import { TicketManagementComponent } from "./ticket-management/ticket-management.component";
import { FilterSalesComponent } from "./filter-sales/filter-sales.component";
import { TaskManagementComponent } from "./task-management/task-management.component";
import { VehicleManagementComponent } from "./vehicle-management/vehicle-management.component";
import { RequestVolunteersComponent } from "./request-volunteers/request-volunteers.component";
import { AuthorManagementComponent } from "./author-management/author-management.component";
import { AddAuthorComponent } from "./author-management/add-author/add-author.component";
import { ModifyAuthorComponent } from "./author-management/modify-author/modify-author.component";
import { EventManagementComponent } from "./event-management/event-management.component";
import { AddEventComponent } from "./event-management/add-event/add-event.component";
import { ModifyEventComponent } from "./event-management/modify-event/modify-event.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule
  ],
  declarations: [
    PagesComponent,
    RedeemTicketComponent,
    TicketManagementComponent,
    FilterSalesComponent,
    VehicleManagementComponent,
    RequestVolunteersComponent,

  ]
})
export class PagesModule {}
