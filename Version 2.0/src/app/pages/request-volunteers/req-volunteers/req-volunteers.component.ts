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
  events: any[];
  authors: any[];
  drivers: any[];

  form = new FormGroup({
    eventName: new FormControl(""),      //not required
    authorName: new FormControl(""),     //not required
    noOfVolunteers: new FormControl("", Validators.required),
    pickLoc: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    dropLoc: new FormControl("", Validators.required),
    vehNum: new FormControl("", Validators.required),
    driverContact: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^[0-9]*$")
    ]),
    description: new FormControl("", Validators.required),
    task: new FormControl("volunteersRequest"),
    requestedBy: new FormControl("Transpotation Coordinator"),
    status:new FormControl("Todo"),

  });

  constructor(private requestVolunteersService: RequestVolunteersService) {
    requestVolunteersService.getAll().subscribe(request => {
      this.requests = request;
    });

  }

  dropdownEvents(){
    this.requestVolunteersService.getAllEvents().subscribe(events =>{
      this.events = events;
      this.events.push();

    });

  }

  dropdownAuthors(){
    this.requestVolunteersService.getAllAuthors().subscribe(authors =>{
      this.authors = authors;
      this.authors.push();

    });

  }

  dropdownFreeDrivers(){
    this.requestVolunteersService.getFreeDrivers().subscribe(drivers =>{
      this.drivers = drivers;
      this.authors.push();

    });

  }

  onSubmit() {
    this.requestVolunteersService.createTasks(this.form.value);
    this.requestVolunteersService.createRequest(this.form.value);
    this.form.reset();
  }

  get eventName() {
    return this.form.get("eventName");
  }

  get authorName() {
    return this.form.get("authorName");
  }

  get noOfVolunteers() {
    return this.form.get("noOfVolunteers");
  }

  get pickLoc() {
    return this.form.get("pickLoc");
  }

  get time() {
    return this.form.get("time");
  }

  get dropLoc() {
    return this.form.get("dropLoc");
  }

  get vehNum() {
    return this.form.get("vehNum");
  }

  get driverContact() {
    return this.form.get("driverContact");
  }

  get description() {
    return this.form.get("description");
  }

  ngOnInit() {

    this.dropdownEvents();
    this.dropdownAuthors();
    this.dropdownFreeDrivers();

  }


}
