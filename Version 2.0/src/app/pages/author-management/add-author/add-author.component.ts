import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from '../../validators/password-validator';


@Component({
  selector: 'ngx-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    userName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
  });


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
  get firstName() {
    return this.form.get("firstName");
  }
  get lastName() {
    return this.form.get("lastName");
  }
  get password() {
    return this.form.get("password");
  }
  get phone() {
    return this.form.get("phone");
  }
  get description() {
    return this.form.get("description");
  }

  
}
