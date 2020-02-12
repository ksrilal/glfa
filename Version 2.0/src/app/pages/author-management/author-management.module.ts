import { NgModule } from "@angular/core";
import { AuthorManagementRoutingModule, routedComponents } from './author-management-routing.module';


@NgModule({
  imports: [AuthorManagementRoutingModule],
  declarations: [...routedComponents]
})
export class AuthorManagementModule {}
