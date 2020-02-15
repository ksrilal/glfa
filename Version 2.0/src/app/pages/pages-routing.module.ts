import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { RedeemTicketComponent } from './redeem-ticket/redeem-ticket.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { FilterSalesComponent } from './filter-sales/filter-sales.component';
import { RequestVolunteersComponent } from './request-volunteers/request-volunteers.component';
import { ViewDriversComponent } from './driver-state/view-drivers/view-drivers.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent
      },
      {
        path: "iot-dashboard",
        component: DashboardComponent
      },
      {
        path: "redeem",
        component: RedeemTicketComponent
      },
      {
        path: "ticket-management",
        component: TicketManagementComponent
      },


      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then(m => m.LayoutModule)
      },
      {
        path: "driver-state",
        loadChildren: () =>
          import("./driver-state/driver-state.module").then(
            m => m.DriverStateManagementModule
          )
      },
      {
        path: "filter-sales",
        loadChildren: () =>
          import("./filter-sales/filter-sales.module").then(
            m => m.FilterSalesModule
          )
      },
      {
        path: "staff-management",
        loadChildren: () =>
          import("./staff-management/staff-management.module").then(
            m => m.StaffManagementModule
          )
      },
      {
        path: "festival-staff-management",
        loadChildren: () =>
          import(
            "./festival-staff-management/festival-staff-management.module"
          ).then(m => m.FestivalStaffManagementModule)
      },
      {
        path: "festival-manager-map",
        loadChildren: () =>
          import(
            "./festival-manager-map/festival-manager-map.module"
          ).then(m => m.ManagerMapModule)
      },
      {
        path: "volunteer-map",
        loadChildren: () =>
          import(
            "./volunteer-map/volunteer-map.module"
          ).then(m => m.VolunteerMapModule)
      },
      {
        path: "transpotation-map",
        loadChildren: () =>
          import(
            "./tranpotation-map/tranpotation-map.module"
          ).then(m => m.TranspotationMapModule)
      },
      {
        path: "volunteer-management",
        loadChildren: () =>
          import("./volunteer-management/volunteer-management.module").then(
            m => m.VolunteerManagementModule
          )
      },
      {
        path: "transpotation-chat",
        loadChildren: () =>
          import("./transpotation-chat/transpotation-chat.module").then(
            m => m.TranspotationChatModule
          )
      },
      {
        path: "request-volunteers",
        loadChildren: () =>
          import("./request-volunteers/request-volunteers.module").then(
            m => m.RequestVolunteersModule
          )
      },
      {
        path: "driver-management",
        loadChildren: () =>
          import("./driver-management/driver-management.module").then(
            m => m.DriverManagementModule
          )
      },
      {
        path: "task-management",
        loadChildren: () =>
          import("./task-management/task-management.module").then(
            m => m.TaskManagementModule
          )
      },
      {
        path: "author-management",
        loadChildren: () =>
          import("./author-management/author-management.module").then(
            m => m.AuthorManagementModule
          )
      },
      {
        path: "event-management",
        loadChildren: () =>
          import("./event-management/event-management.module").then(
            m => m.EventManagementModule
          )
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./forms/forms.module").then(m => m.FormsModule)
      },
      {
        path: "ui-features",
        loadChildren: () =>
          import("./ui-features/ui-features.module").then(
            m => m.UiFeaturesModule
          )
      },
      {
        path: "modal-overlays",
        loadChildren: () =>
          import("./modal-overlays/modal-overlays.module").then(
            m => m.ModalOverlaysModule
          )
      },
      {
        path: "extra-components",
        loadChildren: () =>
          import("./extra-components/extra-components.module").then(
            m => m.ExtraComponentsModule
          )
      },
      {
        path: "maps",
        loadChildren: () => import("./maps/maps.module").then(m => m.MapsModule)
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then(m => m.ChartsModule)
      },
      {
        path: "editors",
        loadChildren: () =>
          import("./editors/editors.module").then(m => m.EditorsModule)
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./tables/tables.module").then(m => m.TablesModule)
      },
      {
        path: "miscellaneous",
        loadChildren: () =>
          import("./miscellaneous/miscellaneous.module").then(
            m => m.MiscellaneousModule
          )
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
