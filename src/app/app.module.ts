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

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    StaffManagementComponent,
    RedeemTicketComponent,
    UserCardComponent,
    FilterSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: 'staff', component: StaffManagementComponent},
      {path: 'redeem', component: RedeemTicketComponent},
      {path: 'filter-sales', component: FilterSalesComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
