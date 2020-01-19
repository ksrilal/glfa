import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AddDriversService } from "../add-drivers.service";

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.scss']
})
export class AddDriversComponent implements OnInit {
  drivers: any[];

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    vehNum: new FormControl("", Validators.required),
    model: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    birthday: new FormControl("", Validators.required)
  });

  constructor(private addDriversService: AddDriversService) {
    addDriversService.getAll().subscribe(driver => {
      this.drivers = driver;
    });
  }

  onSubmit() {
    this.addDriversService.create(this.form.value);
    this.form.reset();
  }

  get name() {
    return this.form.get("name");
  }

  get phone() {
    return this.form.get("phone");
  }

  get vehNum() {
    return this.form.get("vehNum");
  }

  get model() {
    return this.form.get("model");
  }

  get address() {
    return this.form.get("address");
  }

  get birthday() {
    return this.form.get("birthday");
  }



  ngOnInit() {
  }

}
