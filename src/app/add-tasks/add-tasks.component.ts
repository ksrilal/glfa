import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AddTaskService} from '../add-task.service';
import { DateValidator } from '../validators/date-validator';
import {TodoComponent} from '../todo/todo.component'
import { NgForOf } from '@angular/common';
import { of } from 'rxjs';
import { element } from 'protractor';
import { User } from 'firebase';



@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {
 

  form1 = new FormGroup({
    task:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    location:new FormControl(''),
    user: new FormControl('', [Validators.required]),
    dateFrom: new FormControl('', [Validators.required]),
    dateTo: new FormControl('', [DateValidator.dateCompare]),
    noOfVolunteers:new FormControl('')
  });
 


  tasks: any[];

 constructor(private addTaskService:AddTaskService) {
    addTaskService.getTodo().subscribe(tsk=>{this.tasks=tsk});
  }
 
  onSubmit() {
    this.addTaskService.create(this.form1.value);
    
    this.form1.reset();
  }


   
  get task() {
    return this.form1.get('task');
  }
  get description() {
    return this.form1.get("description");
  }
  get location() {
    return this.form1.get("location");
  }
  get user() {
    return this.form1.get("user");
  }

  get dateFrom() {
    return this.form1.get("dateFrom");
  }
  get dateTo() {
    return this.form1.get("dateTo");
  }
  get noOfVolunteers() {
    return this.form1.get("noOfVolunteers");
  }

  
  ngOnInit() {
    
   }




  revert() {

  }

}

