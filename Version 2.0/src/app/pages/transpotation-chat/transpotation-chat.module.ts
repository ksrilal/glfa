import { NgModule } from '@angular/core';
import { TranspotationChatRoutingModule, routedComponents } from './transpotation-chat-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    TranspotationChatRoutingModule,
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
    FormsModule,
    ReactiveFormsModule,

  ],

  declarations: [...routedComponents],

  providers: []
})
export class TranspotationChatModule {}
