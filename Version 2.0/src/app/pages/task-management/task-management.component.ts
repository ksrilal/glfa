import { Component, OnInit } from '@angular/core';

@Component({
  selector: "ngx-task-management",
  template: `
    <router-outlet></router-outlet>
  `
})
export class TaskManagementComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
