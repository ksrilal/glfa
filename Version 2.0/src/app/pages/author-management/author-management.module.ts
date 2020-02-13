import { NgModule } from "@angular/core";
import { AuthorManagementRoutingModule, routedComponents } from './author-management-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTreeGridModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { FormsComponent } from '../forms/forms.component';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { FormInputsComponent } from '../forms/form-inputs/form-inputs.component';
import { DatepickerComponent } from '../forms/datepicker/datepicker.component';
import { FormLayoutsComponent } from '../forms/form-layouts/form-layouts.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FsIconComponent } from '../tables/tree-grid/tree-grid.component';



@NgModule({
  imports: [AuthorManagementRoutingModule,
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
    Ng2SmartTableModule,
    NbTreeGridModule
  ],
  declarations: [...routedComponents,
    // FormsComponent,
    // ButtonsComponent,
    // FormInputsComponent,
    // FormLayoutsComponent,
    // DatepickerComponent,
    // FsIconComponent,

  ]
})
export class AuthorManagementModule {}
