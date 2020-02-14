import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VolunteerManagementService } from '../volunteer-management.service';

@Component({
  selector: 'ngx-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.scss']
})
export class AddVolunteerComponent implements OnInit {
  constructor(private addVolunteersService: VolunteerManagementService) {
    addVolunteersService.getAll().subscribe(volunteer => {
      this.volunteers = volunteer;
    });
   }
  volunteers: any[];

  form = new FormGroup({
    fName: new FormControl("", Validators.required),
    lName: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    NIC: new FormControl("", Validators.required),
    mobile: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    passwd: new FormControl("", Validators.required),

  });
  ngOnInit() {
    
  }

  get fName() {
    return this.form.get("fName");
  }
  get lName() {
    return this.form.get("lName");
  }
  get userName() {
    return this.form.get("userName");
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


  onSubmit() {
    this.addVolunteersService.create(this.form.value);
    this.form.reset();
  }
  
}