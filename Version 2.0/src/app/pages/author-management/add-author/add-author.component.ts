import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from '../../validators/password-validator';
import { AuthorManagementService } from '../author-management.service';


@Component({
  selector: 'ngx-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  constructor(private authorManagement: AuthorManagementService) { }

  ngOnInit() {
  }
 
  form = new FormGroup({
    //userName: new FormControl("", Validators.required),
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    des: new FormControl("", Validators.required),
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
      Validators.required,Validators.minLength(8),
      PasswordValidators.checkPasswrod
    ]),
  });


  onSubmit() {
    this.authorManagement.create(this.form.value);
    this.form.reset();
  }

  get email() {
    return this.form.get("email");
  }
  // get userName() {
  //   return this.form.get("userName");
  // }
  get fname() {
    return this.form.get("fname");
  }
  get lname() {
    return this.form.get("lname");
  }
  get password() {
    return this.form.get("password");
  }
  get mobile() {
    return this.form.get("mobile");
  }
  get des() {
    return this.form.get("des");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }

  
}
