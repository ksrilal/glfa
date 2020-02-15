import { NgModule } from "@angular/core";
import {
  TicketManagementRoutingModule,
  routedComponents
} from "./ticket-management-routing.module";
import { ThemeModule } from "../../@theme/theme.module";
import {
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbProgressBarModule
} from "@nebular/theme";


@NgModule({
  imports: [
    TicketManagementRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule
  ],
  declarations: [...routedComponents]
})
export class StaffManagementModule {}
