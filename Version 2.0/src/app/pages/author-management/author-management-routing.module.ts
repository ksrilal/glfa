import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthorManagementComponent } from './author-management.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ModifyAuthorComponent } from './modify-author/modify-author.component';


const routes: Routes = [
  {
    path: "",
    component: AuthorManagementComponent,
    children: [
      {
        path: "add-author",
        component: AddAuthorComponent
      },
      {
        path: "modify-author",
        component: ModifyAuthorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorManagementRoutingModule {}

export const routedComponents = [
  AuthorManagementComponent, AddAuthorComponent, ModifyAuthorComponent,

];
