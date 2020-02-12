import { NgModule } from "@angular/core";
import {
  routedComponents,
  StaffManagementRoutingModule
} from "./staff-management-routing.module";


@NgModule({
  imports: [StaffManagementRoutingModule],
  declarations: [...routedComponents]
})
export class StaffManagementModule {}
