import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TaskManagementService } from '../task-management.service';

@Component({
  selector: 'ngx-assign-tasks',
  templateUrl: './assign-tasks.component.html',
  styleUrls: ['./assign-tasks.component.scss']
})
export class AssignTasksComponent implements OnInit {
  tasks: any[];

  form = new FormGroup({
    task: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    longitude: new FormControl("", Validators.required),
    noOfVolunteers: new FormControl("", Validators.required),
  });

  constructor(private fb: FormBuilder,private addTasksService: TaskManagementService) {
    addTasksService.getAll().subscribe(task => {
      this.tasks = task;
    });
  }
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;


  today;

  ngOnInit() {
    this.firstForm = this.fb.group({
      task: ['', Validators.required],
      description: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      // from_date: ['', Validators.required],
      // to_date: ['', Validators.required],
      noOfVolunteers: ['', Validators.required],
      
    });

    this.secondForm = this.fb.group({
      userName: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
}

