import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";

@Component({
  selector: "app-ticket-management",
  templateUrl: "./ticket-management.component.html",
  styleUrls: ["./ticket-management.component.scss"]
})
export class TicketManagementComponent implements OnInit {
  events: any[];
  totalRevenue;
  soldQuantity;
  totalQuantity;
  remainingQuantity;

  constructor(eventService: EventService) {
    eventService.getAll().subscribe(events => {
      this.totalRevenue = 0;
      this.soldQuantity = 0;
      this.totalQuantity = 0;
      this.remainingQuantity=0;
      this.events = events;
      events.forEach(element => {
        this.totalRevenue += element["soldQuantity"] * element["price"];
        this.soldQuantity += element["soldQuantity"];
        this.totalQuantity += element["quantity"];
        this.remainingQuantity += element["quantity"] - element["soldQuantity"];
      });
    });
  }

  ngOnInit() {}
}
