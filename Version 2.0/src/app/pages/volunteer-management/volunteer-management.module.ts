import { NgModule } from "@angular/core";
import { routedComponents, VolunteerManagementRoutingModule } from './volunteer-management-routing.module';


@NgModule({
  imports: [VolunteerManagementRoutingModule],
  declarations: [...routedComponents]
})
export class VolunteerManagementModule {}
