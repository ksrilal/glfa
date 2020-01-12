import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from '../validators/password-validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-author-management',
  templateUrl: './author-management.component.html',
  styleUrls: ['./author-management.component.scss']
})
export class AuthorManagementComponent implements OnInit {

  form1 = new FormGroup({
    fName:new FormControl('',Validators.required),
    lName:new FormControl('',Validators.required),
    userName:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    passwd: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    dob:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    des:new FormControl('',Validators.required ),
  });

  constructor() { }

  onSubmit() {
    console.log(this.form1.value);
    this.form1.reset();
  }

  get email() {
    return this.form1.get('email');
  }
  get userName() {
    return this.form1.get("userName");
  }
  get password() {
    return this.form1.get("password");
  }
  get mobile() {
    return this.form1.get("mobile");
  }

  get fName() {
    return this.form1.get("fName");
  }
  get lName() {
    return this.form1.get("lName");
  }
  get gender() {
    return this.form1.get("gender");
  }

  get dob() {
    return this.form1.get("dob");
  }

  get des() {
    return this.form1.get("dob");
  }

  ngOnInit() {
  }

}
