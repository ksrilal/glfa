import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TranspotationChatComponent } from './transpotation-chat.component';
import { TransChatComponent } from './trans-chat/trans-chat.component';


const routes: Routes = [
  {
    path: "",
    component: TranspotationChatComponent,
    children: [
      {
        path: "chat",
        component: TransChatComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranspotationChatRoutingModule {}

export const routedComponents = [
  TranspotationChatComponent,
  TransChatComponent
];
