import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

  @Input('event') event;

  constructor() { }

  ngOnInit() {
  }

}
