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
  NbIconModule
} from "@nebular/theme";
import { FormsModule as ngFormsModule } from "@angular/forms";

import { DriverStateRoutingModule, routedComponents } from './driver-state-routing.module';

@NgModule({
  imports: [
    DriverStateRoutingModule,
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
    ngFormsModule
  ],
  declarations: [
    ...routedComponents,
    // FormsComponent,
    // ButtonsComponent,
    // FormInputsComponent,
    // FormLayoutsComponent,
    // DatepickerComponent
  ]
})
export class DriverStateManagementModule {}
