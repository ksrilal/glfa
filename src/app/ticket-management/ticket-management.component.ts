import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent implements OnInit {

  events: any[];

  constructor(eventService: EventService) {
    eventService.getAll().subscribe(events=>{
      this.events = events;
      console.log(this.events);
    });
   }

  ngOnInit() {
  }

}
