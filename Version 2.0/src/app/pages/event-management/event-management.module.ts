import { NgModule } from "@angular/core";
import { EventManagementRoutingModule, routedComponents } from './event-management-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from '../forms/forms.component';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { FormInputsComponent } from '../forms/form-inputs/form-inputs.component';
import { FormLayoutsComponent } from '../forms/form-layouts/form-layouts.component';
import { DatepickerComponent } from '../forms/datepicker/datepicker.component';



@NgModule({
  imports: [EventManagementRoutingModule,
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

  ],
  declarations: [...routedComponents,
    // FormsComponent,
    // ButtonsComponent,
    // FormInputsComponent,
    // FormLayoutsComponent,
    // DatepickerComponent,
  ]
})
export class EventManagementModule {}
