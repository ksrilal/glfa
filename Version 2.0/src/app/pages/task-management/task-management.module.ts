import { NgModule } from "@angular/core";
import { TaskManagementRoutingModule, routedComponents } from './task-management-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbAccordionModule, NbListModule, NbStepperModule, NbRouteTabsetModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule as ngFormsModule, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent  } from '../forms/forms.component';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { FormInputsComponent } from '../forms/form-inputs/form-inputs.component';
import { FormLayoutsComponent  } from '../forms/form-layouts/form-layouts.component';
import { DatepickerComponent } from '../forms/datepicker/datepicker.component';
import { LayoutComponent } from '../layout/layout.component';
import { TabsComponent, Tab1Component, Tab2Component } from '../layout/tabs/tabs.component';
import { StepperComponent } from '../layout/stepper/stepper.component';
import { ListComponent } from '../layout/list/list.component';
import { NewsPostPlaceholderComponent } from '../layout/infinite-list/news-post-placeholder/news-post-placeholder.component';
import { InfiniteListComponent } from '../layout/infinite-list/infinite-list.component';
import { NewsPostComponent } from '../layout/infinite-list/news-post/news-post.component';
import { AccordionComponent } from '../layout/accordion/accordion.component';
import { NewsService } from './news.service';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { D3AdvancedPieComponent } from '../charts/d3/d3-advanced-pie.component';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [TaskManagementRoutingModule,
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
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    ngFormsModule,
    // ChartsRoutingModule,
    NgxChartsModule,
     ChartModule,
   // TablesRoutingModule,
    Ng2SmartTableModule,
    Ng2SearchPipeModule
    ,

    NbTreeGridModule,
    

  ],

    declarations: [...routedComponents,
    //from here ---
  //   FormsComponent,
  //  ButtonsComponent,
  //  FormInputsComponent,
  //   FormLayoutsComponent,
  //   DatepickerComponent,
    //to here ------
    LayoutComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    StepperComponent,
    ListComponent,
    NewsPostPlaceholderComponent,
    InfiniteListComponent,
    NewsPostComponent,
    D3AdvancedPieComponent,

    AccordionComponent,],


    providers: [
      NewsService,
    ],
})
export class TaskManagementModule {}
