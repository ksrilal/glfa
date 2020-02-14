import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { RequestVolunteersService } from '../request-volunteers.service';

@Component({
  selector: 'ngx-req-volunteers',
  templateUrl: './req-volunteers.component.html',
  styleUrls: ['./req-volunteers.component.scss']
})
export class ReqVolunteersComponent implements OnInit {
  requests: any[];

  form = new FormGroup({
    eventName: new FormControl("", Validators.required),
    authorName: new FormControl("", Validators.required),
    noVol: new FormControl("", Validators.required),
    pickLoc: new FormControl("", Validators.required),
    pickTime: new FormControl("", Validators.required),
    dropLoc: new FormControl("", Validators.required),
    vehNum: new FormControl("", Validators.required),
    driverContact: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
  });

  constructor(private requestVolunteersService: RequestVolunteersService) {
    requestVolunteersService.getAll().subscribe(request => {
      this.requests = request;
    });
  }

  onSubmit() {
    this.requestVolunteersService.create(this.form.value);
    this.form.reset();
  }

  get eventName() {
    return this.form.get("eventName");
  }

  get authorName() {
    return this.form.get("authorName");
  }

  get noVol() {
    return this.form.get("noVol");
  }

  get pickLoc() {
    return this.form.get("pickLoc");
  }

  get pickTime() {
    return this.form.get("pickTime");
  }

  get dropLoc() {
    return this.form.get("dropLoc");
  }

  get vehNum() {
    return this.form.get("dropLoc");
  }

  get driverContact() {
    return this.form.get("dropLoc");
  }

  get description() {
    return this.form.get("description");
  }

  ngOnInit() {

  }


}
