import { NgModule } from "@angular/core";
import { DriverManagementRoutingModule, routedComponents } from './driver-management-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTreeGridModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsComponent } from '../forms/forms.component';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { FormInputsComponent } from '../forms/form-inputs/form-inputs.component';
import { FormLayoutsComponent } from '../forms/form-layouts/form-layouts.component';
import { DatepickerComponent } from '../forms/datepicker/datepicker.component';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from "@angular/forms";
import { FsIconComponent } from '../tables/tree-grid/tree-grid.component';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { SmartTableComponent } from '../tables/smart-table/smart-table.component';

@NgModule({
  imports: [
    DriverManagementRoutingModule,
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
    NbTreeGridModule,
    NbIconModule,
    ThemeModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,

  ],
  declarations: [
    ...routedComponents,
    // FormsComponent,
    // ButtonsComponent,
    // FormInputsComponent,
    // FormLayoutsComponent,
    // DatepickerComponent,
    // FsIconComponent,
  ]
})
export class DriverManagementModule {}
