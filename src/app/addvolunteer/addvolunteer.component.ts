import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AddVolunteerService} from '../add-volunteer.service';
import { PasswordValidators } from '../validators/password-validator';
import {Volunteer} from '../models/volunteer.model';


@Component({
  selector: 'app-addvolunteer',
  templateUrl: './addvolunteer.component.html',
  styleUrls: ['./addvolunteer.component.scss']
  
})
export class AddvolunteerComponent implements OnInit {
 

  form1 = new FormGroup({
    fName:new FormControl('',Validators.required),
    lName:new FormControl('',Validators.required),
    userName:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    passwd: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    dob:new FormControl('',Validators.required),
    NIC:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    gender:new FormControl('',Validators.required),
  });
 
  volunteers: any[];

 constructor(private addVolunteerService:AddVolunteerService) {
   addVolunteerService.getAll().subscribe(volunteers => {
   this.volunteers = volunteers;
    });
    console.log("volun array",this.volunteers);
  }

  onSubmit() {
    this.addVolunteerService.create(this.form1.value);
    
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

  get NIC() {
    return this.form1.get("NIC");
  }
  get dob() {
    return this.form1.get("dob");
  }
  
  
  ngOnInit() {
    
   }




  revert() {

  }

  
}
