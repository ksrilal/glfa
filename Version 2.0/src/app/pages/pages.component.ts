import { Component } from '@angular/core';

import { boxoffice, volunteerCoordinator, manager, transportationCoordinator } from "./pages-menu";


@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `
})
export class PagesComponent {

  menu;

  constructor(){
    var a = true;
    if (a) {
      this.menu = manager;
    } else {
      this.menu = volunteerCoordinator;
    }
  }




}
