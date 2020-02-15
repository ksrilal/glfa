import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { DriverManagementService } from '../driver-management.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'ngx-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.scss']
})
export class AddDriversComponent implements OnInit {
  drivers: any[];
  
  downloadURL;
  randomId;

  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/events/" + this.randomId, event.target.files[0]);
  }

  form = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    nic: new FormControl("", Validators.required),
    contactnum: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    birthday: new FormControl("", Validators.required),
    vehbrand: new FormControl("", Validators.required),
    vehmodel: new FormControl("", Validators.required),
    vehnum: new FormControl("", Validators.required),
    licensenum: new FormControl("", Validators.required),
    pic: new FormControl("", Validators.required),

  });

  constructor(private driverManagementService: DriverManagementService, private afStorage: AngularFireStorage) {
    driverManagementService.getAll().subscribe(driver => {
      this.drivers = driver;
    });
  }

  onSubmit() {
    this.driverManagementService.create(this.form.value);
    this.form.reset();
  }

  // onDelete(nic: String) {
  //   if(confirm("Are you sure to delete this record?")) {
  //     this.firestore.doc('drivers/'+nic).delete();
  //   }
  // }

  get fname() {
    return this.form.get("fname");
  }

  get lname() {
    return this.form.get("lname");
  }

  get nic() {
    return this.form.get("nic");
  }

  get contactnum() {
    return this.form.get("contactnum");
  }

  get address() {
    return this.form.get("address");
  }

  get birthday() {
    return this.form.get("birthday");
  }

  get vehbrand() {
    return this.form.get("vehbrand");
  }

  get vehmodel() {
    return this.form.get("vehmodel");
  }

  get vehnum() {
    return this.form.get("vehnum");
  }

  get licensenum() {
    return this.form.get("licensenum");
  }

  get pic() {
    return this.form.get("pic");
  }

  ngOnInit() {
  }

}
