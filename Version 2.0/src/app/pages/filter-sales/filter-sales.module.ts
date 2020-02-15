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
  NbSelectModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  routedComponents,
  FilterSalesRoutingModule
} from "./filter-sales-routing.module";

@NgModule({
  imports: [
    FilterSalesRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbSelectModule,
    NbRadioModule,

    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents
    // FormsComponent,
    // ButtonsComponent,
    // FormInputsComponent,
    // FormLayoutsComponent,
    // DatepickerComponent
  ]
})
export class FilterSalesModule {}
