import { TranspotationMapRoutingModule, routedComponents } from './tranpotation-map-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTabsetModule, NbRouteTabsetModule, NbListModule, NbAccordionModule } from '@nebular/theme';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    TranspotationMapRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    // FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    // ngFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k",
      libraries: ["places"],

    })
  ],
  declarations: [...routedComponents
  ]
})
export class TranspotationMapModule {}
