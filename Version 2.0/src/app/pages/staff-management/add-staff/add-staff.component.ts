import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from '../../validators/password-validator';

@Component({
  selector: "ngx-add-staff",
  templateUrl: "./add-staff.component.html",
  styleUrls: ["./add-staff.component.scss"]
})
export class AddStaffComponent implements OnInit {

  ngOnInit(){

  }


  form = new FormGroup({
    userName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      PasswordValidators.checkPasswrod
    ]),
    accessName: new FormControl("", Validators.required)
  });

  constructor() {

  }

  onSubmit() {
    // this.staffService.create(this.form.value);
    this.form.reset();
  }

  get email() {
    return this.form.get("email");
  }
  get userName() {
    return this.form.get("userName");
  }
  get password() {
    return this.form.get("password");
  }
  get mobile() {
    return this.form.get("mobile");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
  get accessName() {
    return this.form.get("accessName");
  }
}
