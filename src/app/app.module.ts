import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HeaderComponent } from "./header/header.component";
import { StaffManagementComponent } from "./staff-management/staff-management.component";
import { RouterModule } from "@angular/router";
import { RedeemTicketComponent } from "./redeem-ticket/redeem-ticket.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { FilterSalesComponent } from "./filter-sales/filter-sales.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment.prod";
import { TicketManagementComponent } from "./ticket-management/ticket-management.component";
import { TicketCardComponent } from "./ticket-card/ticket-card.component";
import { EventService } from "./event.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VolunteermanagementComponent } from "./volunteermanagement/volunteermanagement.component";
import { AddvolunteerComponent } from "./addvolunteer/addvolunteer.component";

import { AddTasksComponent } from "./add-tasks/add-tasks.component";

import { AuthorManagementComponent } from "./author-management/author-management.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EventComponent } from "./event/event.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VehicleManagementComponent } from "./vehicle-management/vehicle-management.component";
import { MatTabsModule } from "@angular/material/tabs";
import { AllVehiclesComponent } from "./vehicle-management/all-vehicles/all-vehicles.component";
import { AssignedVehiclesComponent } from "./vehicle-management/assigned-vehicles/assigned-vehicles.component";
import { FreeVehiclesComponent } from "./vehicle-management/free-vehicles/free-vehicles.component";
import { RequestVolunteersComponent } from "./request-volunteers/request-volunteers.component";
import { ContactDriversComponent } from "./contact-drivers/contact-drivers.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { ContactDriversService } from "./contact-drivers.service";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { Ng2CompleterModule } from "ng2-completer";
import { TodoComponent } from "./todo/todo.component";
import { OngoingComponent } from "./ongoing/ongoing.component";
import { DoneComponent } from "./done/done.component";
import { RequestVolunteersService } from "./request-volunteers.service";
import { VehicleManagementService } from "./vehicle-management.service";
import { AuthorService } from "./author-management-service/author.service";
import { ContactDriversCardComponent } from "./contact-drivers-card/contact-drivers-card.component";
import { AddDriversService } from './add-drivers.service';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { AgmCoreModule } from '@agm/core';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { TrackAuthorComponent } from './track-author/track-author.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    StaffManagementComponent,
    RedeemTicketComponent,
    UserCardComponent,
    FilterSalesComponent,
    TicketManagementComponent,
    TicketCardComponent,
    VolunteermanagementComponent,
    AddvolunteerComponent,
    AddTasksComponent,
    AuthorManagementComponent,
    EventComponent,
    LoginComponent,
    VehicleManagementComponent,
    AllVehiclesComponent,
    AssignedVehiclesComponent,
    FreeVehiclesComponent,
    RequestVolunteersComponent,
    ContactDriversComponent,
    DashboardComponent,

    TodoComponent,
    OngoingComponent,
    DoneComponent,
    ContactDriversCardComponent,
    AddDriversComponent,
    AddStaffComponent,
    TrackAuthorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "staff",
        component: StaffManagementComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "redeem",
        component: RedeemTicketComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "filter-sales",
        component: FilterSalesComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "ticket-management",
        component: TicketManagementComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "volunteer-management",
        component: VolunteermanagementComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "addvolunteer",
        component: AddvolunteerComponent,
        canActivate: [AuthGuardService]
      },

      {
        path: "add-tasks",
        component: AddTasksComponent,
        canActivate: [AuthGuardService]
      },

      {
        path: "author-management",
        component: AuthorManagementComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "event",
        component: EventComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "vehicle-management",
        component: VehicleManagementComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "vehicle-management/all-vehicles",
        component: AllVehiclesComponent
      },

      {
        path: "vehicle-management/free-vehicles",
        component: FreeVehiclesComponent
      },
      {
        path: "vehicle-management/assigned-vehicles",
        component: AssignedVehiclesComponent
      },
      {
        path: "request-volunteers",
        component: RequestVolunteersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "contact-drivers",
        component: ContactDriversComponent,
        canActivate: [AuthGuardService]
      },

      {
        path: "add-drivers",
        component: AddDriversComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "add-staff",
        component: AddStaffComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "track-author",
        component: TrackAuthorComponent,
        canActivate: [AuthGuardService]
      },

    ]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),

  ],
  providers: [
    EventService,
    AuthService,
    AuthGuardService,
    ContactDriversService,
    RequestVolunteersService,
    VehicleManagementService,
    AuthorService,
    AddDriversService,
    



    
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}