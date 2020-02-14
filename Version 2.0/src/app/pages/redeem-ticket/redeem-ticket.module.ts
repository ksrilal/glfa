import { NgModule } from "@angular/core";
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
  NbSelectModule,
  NbIconModule,
  NbListModule,
  NbTreeGridModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RedeemTicketComponent } from "./redeem-ticket.component";
import { RedeemTicketPageComponent } from "./redeem-ticket-page/redeem-ticket-page.component";
import { FsIconComponent } from "../tables/tree-grid/tree-grid.component";

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    // NbToastrModule.forRoot(),
    // NbAlertModule,
    // NgxPrintModule,
    // Ng2SearchPipeModule,
    // MatFormFieldModule,
    // MatIconModule,
    // MatListModule,
    NbListModule,

    NbTreeGridModule
  ],
  declarations: [
    RedeemTicketComponent,
    RedeemTicketPageComponent,
    // FsIconComponent,
  ]
})
export class RedeemTicketModule {}
