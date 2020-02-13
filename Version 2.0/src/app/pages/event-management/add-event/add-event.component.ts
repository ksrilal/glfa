import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    eventName: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    venue: new FormControl("", Validators.required),
    guestName: new FormControl("", Validators.required),
    ticketPrice: new FormControl("", Validators.required),
    ticketQuantity: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
  });


  onSubmit() {
    // this.staffService.create(this.form.value);
    this.form.reset();
  }

  get eventName() {
    return this.form.get("eventName");
  }
  get date() {
    return this.form.get("date");
  }
  get time() {
    return this.form.get("time");
  }
  get venue() {
    return this.form.get("venue");
  }
  get guestName() {
    return this.form.get("guestName");
  }
  get ticketPrice() {
    return this.form.get("ticketPrice");
  }
  get description() {
    return this.form.get("description");
  }

  get ticketQuantity() {
    return this.form.get("ticketQuantity");
  }

}
