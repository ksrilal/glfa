import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SmartTableData } from '../../../@core/data/smart-table';
import { EventManagementService } from '../event-management.service';
import * as firebase from 'firebase/app';
  import { from } from 'rxjs';

@Component({
  selector: 'ngx-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor(private eventMangement: EventManagementService) { }

  ngOnInit() {
  }

  latitude: number=0;
  longitude: number=0;
  sell: number=0;

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    venue: new FormControl("", Validators.required),
    author: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
    des: new FormControl("", Validators.required),
    sold: new FormControl(""),
  });

 
  onSubmit() {
    const location = new firebase.firestore.GeoPoint(
      this.latitude,this.longitude
    )
    this.form.value['location']=location;
    this.form.value.sold=this.sell;


    this.eventMangement.create(this.form.value);
    this.form.reset();
  }

  get name() {
    return this.form.get("name");
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
  get author() {
    return this.form.get("author");
  }
  get price() {
    return this.form.get("price");
  }
  get des() {
    return this.form.get("des");
  }

  get quantity() {
    return this.form.get("quantity");
  }
  get sold() {
    return this.form.get("quantity");
  }


}
