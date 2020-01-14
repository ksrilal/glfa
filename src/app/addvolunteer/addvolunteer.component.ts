import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AddVolunteerService} from '../add-volunteer.service';
import { PasswordValidators } from '../validators/password-validator';
import { NgForOf } from '@angular/common';
import { of } from 'rxjs';
import { element } from 'protractor';
import { User } from 'firebase';



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
 
  users: any[];

 constructor(private addVolunteerService:AddVolunteerService) {
  // addVolunteerService.getAll().subscribe(users => {
  // this.users = users;
   // });
    console.log("volunteers array" );
    if(this.addVolunteerService.getAll()==null){
      console.log("no items");
    }else{
    //for(var v of Object.keys(this.addVolunteerService.getAll())){
    this.addVolunteerService.getAll().forEach(element => {
      //this.users.push(element);
      console.log("at addvol components",element);
    });
    //console.log("at addvol components",v.fName);
   // }
    }
  }
 /* constructor(private addVolunteerService:AddVolunteerService) {
     
    addVolunteerService.getAll().subscribe(users => {
     this.users =users;
      });
    

      console.log("volunteers array" );
      if(this.users==null){
        console.log("no items");
      }else{
      //for(var v of Object.keys(this.addVolunteerService.getAll())){
      this.users.forEach(element => {
        console.log("at addvol components",element);
      });
      //console.log("at addvol components",v.fName);
     // }
    }
    }
*/
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
