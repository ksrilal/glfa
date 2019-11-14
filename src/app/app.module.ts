import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import {RouterModule} from '@angular/router';
import { RedeemTicketComponent } from './redeem-ticket/redeem-ticket.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FilterSalesComponent } from './filter-sales/filter-sales.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { EventService } from './event.service';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VolunteermanagementComponent } from './volunteermanagement/volunteermanagement.component';
import { AddvolunteerComponent } from './addvolunteer/addvolunteer.component';

import { AddTasksComponent } from './add-tasks/add-tasks.component';

import { AuthorManagementComponent } from './author-management/author-management.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';





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
    LoginComponent
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
      }
    ]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
