import { NgModule } from "@angular/core";
import {
  routedComponents,
  StaffManagementRoutingModule
} from "./staff-management-routing.module";
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
import { FormsRoutingModule } from "../forms/forms-routing.module";
import { FormsModule as ngFormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormsComponent } from '../forms/forms.component';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { FormInputsComponent } from '../forms/form-inputs/form-inputs.component';
import { FormLayoutsComponent } from '../forms/form-layouts/form-layouts.component';
import { DatepickerComponent } from '../forms/datepicker/datepicker.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  imports: [
    StaffManagementRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    // FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
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
export class StaffManagementModule {}
