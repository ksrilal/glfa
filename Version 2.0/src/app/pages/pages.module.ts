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
import { FestivalStaffManagementComponent } from "./festival-staff-management/festival-staff-management.component";
import { AddStaffComponent } from "./festival-staff-management/add-staff/add-staff.component";
import { ModifyStaffComponent } from "./festival-staff-management/modify-staff/modify-staff.component";
import { DriverManagementComponent } from "./driver-management/driver-management.component";
import { AddDriversComponent } from "./driver-management/add-drivers/add-drivers.component";
import { ModifyDriversComponent } from "./driver-management/modify-drivers/modify-drivers.component";
import { ReqVolunteersComponent } from "./request-volunteers/req-volunteers/req-volunteers.component";
import { DriverStateComponent } from "./driver-state/driver-state.component";
import { ViewDriversComponent } from "./driver-state/view-drivers/view-drivers.component";
import { FestivalStaffManagementService } from "./festival-staff-management/festival-staff-management.service";
import { DropzoneDirective } from "./dropzone.directive";
import { RedeemTicketModule } from "./redeem-ticket/redeem-ticket.module";
import { TranspotationChatComponent } from "./transpotation-chat/transpotation-chat.component";
import { TransChatComponent } from "./transpotation-chat/trans-chat/trans-chat.component";
import { FestivalManagerMapComponent } from "./festival-manager-map/festival-manager-map.component";
import { ManagerMapComponent } from "./festival-manager-map/manager-map/manager-map.component";
import { VolunteerMapComponent } from "./volunteer-map/volunteer-map.component";
import { MapComponent } from "./volunteer-map/map/map.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    RedeemTicketModule
  ],
  declarations: [
    PagesComponent,
    // RedeemTicketComponent,
    TicketManagementComponent,
    FilterSalesComponent,
    VehicleManagementComponent,
    DropzoneDirective
  ],
  providers: [FestivalStaffManagementService]
})
export class PagesModule {}
