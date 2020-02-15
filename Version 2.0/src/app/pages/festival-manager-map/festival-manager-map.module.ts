import {
  ManagerMapRoutingModule,
  routedComponents
} from "./festival-manager-map-routing.module";
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
import { NgModule } from "@angular/core";
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from '../maps/search-map/map/map.component';

@NgModule({
  imports: [
    ManagerMapRoutingModule,
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
    // ngFormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
  ],
  declarations: [...routedComponents]
})
export class ManagerMapModule {}
