import { Component } from "@angular/core";

import {
  boxoffice,
  volunteerCoordinator,
  manager,
  transportationCoordinator,
  all
} from "./pages-menu";

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

  constructor() {


    var roll = "volunteerCoordinator";


    console.log(localStorage.getItem("role"));
    var roll = localStorage.getItem("role");

    if (roll == "manager") {
      this.menu = manager;
    } else if (roll == "volunteer") {
      this.menu = volunteerCoordinator;
    } else if (roll == "boxOffice") {
      this.menu = boxoffice;
    } else if (roll == "transpotation") {
      this.menu = transportationCoordinator;
    } else if (roll == "all") {
      this.menu = all;
    }
  }
}
