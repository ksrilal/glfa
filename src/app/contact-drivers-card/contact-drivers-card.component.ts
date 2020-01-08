import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-drivers-card',
  templateUrl: './contact-drivers-card.component.html',
  styleUrls: ['./contact-drivers-card.component.scss']
})
export class ContactDriversCardComponent implements OnInit {

  @Input('driver') driver;

  constructor() { }

  ngOnInit() {
  }

}
