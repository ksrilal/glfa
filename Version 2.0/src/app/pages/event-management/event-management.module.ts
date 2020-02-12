import { NgModule } from "@angular/core";
import { EventManagementRoutingModule, routedComponents } from './event-management-routing.module';


@NgModule({
  imports: [EventManagementRoutingModule],
  declarations: [...routedComponents]
})
export class EventManagementModule {}
