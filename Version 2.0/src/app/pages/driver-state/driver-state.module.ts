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
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbListModule,
  NbAccordionModule
} from "@nebular/theme";
import {
  FormsModule as ngFormsModule,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";

import {
  DriverStateRoutingModule,
  routedComponents
} from "./driver-state-routing.module";
import { LayoutRoutingModule } from "../layout/layout-routing.module";
import { LayoutComponent } from "../layout/layout.component";
import {
  TabsComponent,
  Tab1Component,
  Tab2Component
} from "../layout/tabs/tabs.component";
import { ListComponent } from "../layout/list/list.component";
import { NewsPostPlaceholderComponent } from "../layout/infinite-list/news-post-placeholder/news-post-placeholder.component";
import { InfiniteListComponent } from "../layout/infinite-list/infinite-list.component";
import { NewsPostComponent } from "../layout/infinite-list/news-post/news-post.component";
import { AccordionComponent } from "../layout/accordion/accordion.component";

@NgModule({
  imports: [
    DriverStateRoutingModule,
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
    FormsModule,
    ReactiveFormsModule,

    NbTabsetModule,

    NbListModule
  ],
  declarations: [...routedComponents,
  ]
})
export class DriverStateManagementModule {}
