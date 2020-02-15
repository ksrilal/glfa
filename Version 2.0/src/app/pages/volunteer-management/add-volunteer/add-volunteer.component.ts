import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VolunteerManagementService } from '../volunteer-management.service';
import { PasswordValidators } from '../../validators/password-validator';

@Component({
  selector: 'ngx-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.scss']
})
export class AddVolunteerComponent implements OnInit {
  constructor(private  volunteerManagementService: VolunteerManagementService) {
    volunteerManagementService.getAll().subscribe(user => {
      this.users = user;
    });
   }
  users: any[];

  form = new FormGroup({
    fName: new FormControl("", Validators.required),
    lName: new FormControl("", Validators.required),
    gender: new FormControl("",Validators.required),
    dob: new FormControl("", Validators.required),
    NIC: new FormControl("", [Validators.required,Validators.minLength(10)]),
    mobile: new FormControl("", [Validators.required,Validators.minLength(10)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    passwd: new FormControl("", [Validators.required,Validators.minLength(8)]),
    confirmpassword:new FormControl("",[Validators.required,PasswordValidators.checkPasswrod])

  });
  ngOnInit() {
    
  }

  get fName() {
    return this.form.get("fName");
  }
  get lName() {
    return this.form.get("lName");
  }
  

  get gender() {
    return this.form.get("gender");
  }

  get dob() {
    return this.form.get("dob");
  }

  get NIC() {
    return this.form.get("NIC");
  }

  get mobile() {
    return this.form.get("mobile");
  }

  get email() {
    return this.form.get("email");
  }

  get passwd() {
    return this.form.get("passwd");
  }

  get confirmPassword(){
    return this.form.get("confirmpassword");
  }



  onSubmit() {
    this.volunteerManagementService.create(this.form.value);
    this.form.reset();
  }
  
}