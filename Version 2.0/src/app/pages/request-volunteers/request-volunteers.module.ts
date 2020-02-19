import { NgModule } from "@angular/core";

import { RequestVolunteersRoutingModule, routedComponents } from './request-volunteers-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbListModule } from '@nebular/theme';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    RequestVolunteersRoutingModule,
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
    ngFormsModule,
    ReactiveFormsModule,
    NbListModule
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
export class RequestVolunteersModule {}
