import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TaskManagementService } from '../task-management.service';
import { NbThemeService } from '@nebular/theme';
import { UserActivityData } from '../../../@core/data/user-activity';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-assign-tasks',
  templateUrl: './assign-tasks.component.html',
  styleUrls: ['./assign-tasks.component.scss']
})
export class AssignTasksComponent implements OnInit {
  tasks: any[];

 /* firstform = new FormGroup({
    task: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    longitude: new FormControl("", Validators.required),
    dueDate: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    noOfVolunteers: new FormControl("", Validators.required),
  });*/

  constructor(private fb: FormBuilder,private taskManagementService: TaskManagementService,
    private themeService: NbThemeService,
              private userActivityService: UserActivityData) {
    taskManagementService.getAll().subscribe(task => {
      this.tasks = task;
    });
    ///new
    this.themeService.getJsTheme()
    .pipe(takeWhile(() => this.alive))
    .subscribe(theme => {
      this.currentTheme = theme.name;
  });

  this.getUserActivity(this.type);
  
  }
  
  firstForm: FormGroup;
  secondForm: FormGroup;


  today;

  ngOnInit() {
    this.firstForm = this.fb.group({
      task: ['', Validators.required],
      description: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      dueDate: ['', Validators.required],
      time: ['', Validators.required],
      noOfVolunteers: ['', Validators.required],
      
    });

    this.secondForm = this.fb.group({
      userName: ['', Validators.required],
    });

  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
    this.taskManagementService.create(this.firstForm.value);
    this.firstForm.reset();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  //new item starts here
  
  private alive = true;

  userActivity=[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

 



  getUserActivity(period: string) {
    // this.userActivityService.getUserActivityData(period)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(userActivityData => {
    //     this.userActivity = userActivityData;
    //     console.log(this.userActivity)
    //   });
    this.taskManagementService.getAll().subscribe(result=>{
      this.userActivity=result;
      console.log(this.userActivity)
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }

}

