import { Component, OnInit, Inject } from '@angular/core';
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
 /*   this.firstForm = this.fb.group({
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
*/
  }

 /* onFirstSubmit() {
    this.firstForm.markAsDirty();
    // this.taskManagementService.create(this.firstForm.value);
    // console.log("sdjkhbvfkds")
    // this.firstForm.reset();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
    // console.log(this.secondForm.value)

  }*/
  form = new FormGroup({
    task: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    time: new FormControl("",[Validators.required]),
    dueDate:new FormControl(),
    longitude: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    noOfVolunteers: new FormControl("", [Validators.required,Validators.min(1)]),
    requestedBy:new FormControl("",Validators.required),

  });
  onSubmit() {
    this.taskManagementService.create(this.form.value);
    this.form.reset();
  } 

  //new item starts here
  
  private alive = true;

  userActivity=[] = [];
  type = 'month';
  types = ['Ongoing', 'Todo', 'Done'];
  currentTheme: string;
  staff=["Festival Manager","Volunteer Coordinator","Transportation Manager","Box Office Manager"];


  getUserActivity(period: string) {
   
    this.taskManagementService.getSelected(period).subscribe(result=>{
      this.userActivity=result;
      console.log(period);
      console.log(result);
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }

  get task() {
    return this.form.get("task");
  }
  get dueDate(){
    return Date.now();
  }
  get description() {
    return this.form.get("description");
  }
  get time() {
    return this.form.get("time");
  }

  get longitude() {
    return this.form.get("longitude");
  }
  get latitude() {
    return this.form.get("latitude");
  }
  get noOfVolunteers() {
    return this.form.get("noOfVolunteers");
  }
  get requestedBy(){
    return this.form.get("requestedBy");
  }

}

