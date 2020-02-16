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

  searchTerm;


  constructor(private fb: FormBuilder, private taskManagementService: TaskManagementService,
    private themeService: NbThemeService,
    private userActivityService: UserActivityData) {
    taskManagementService.getAll().subscribe(task => {
      this.tasks = task;
    });
    
    taskManagementService.getAvailableVolunteers().subscribe(a => {
      this.freeVolunteers=a;
    });

    taskManagementService.getUnassignedTasks().subscribe(t=>{
      this.unAssignedTasks=t;
    });

    ///new
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });

    this.getUserActivity("Todo");

  }

  freeVolunteers: any[];
  unAssignedTasks:any[];
  firstForm: FormGroup;
  secondForm: FormGroup;
 
  public today_date=new Date().getDate();

  today;

  ngOnInit() {
     
  }
  taskDetails;
   onFirstSubmit() {
     this.firstForm.markAsDirty();
     // this.taskManagementService.create(this.firstForm.value);
     this.taskDetails=(this.firstForm.value);
      console.log(this.taskDetails);
      
     // this.firstForm.reset();
   }
 
   onSecondSubmit() {
     this.secondForm.markAsDirty();
     console.log(this.secondForm.value)
 
   }

  toAssign: any[];

  jobTask="";
  volunteer="";
   selectTsk(event){
    console.log(event.task);
    this.jobTask=event;
   }
  addPeople(vol) {
    const count=vol.noOfVolunteers;
    console.log(vol);
    this.volunteer=vol;
    this.volunteer['availability']='false';
   // if(this.jobTask['volCount'>'0']){
   //   this.jobTask['volCount']=this.jobTask['volCount']-1;
   // }else{
      this.jobTask['status']='Ongoing';
   // }
    // console.log(tsk);
    console.log(this.jobTask);
    console.log(this.volunteer);
    this.taskManagementService.assignVolunteer(this.volunteer,this.jobTask);
  }
  
  form = new FormGroup({
    task: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    time: new FormControl("", [Validators.required]),
    dueDate: new FormControl(this.today_date),
    status:new FormControl("Todo"),
    longitude: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    noOfVolunteers: new FormControl("", [Validators.required, Validators.min(1)]),
    requestedBy: new FormControl("", Validators.required),
   // volCount:new FormControl(""),
  })

 
  onSubmit() {
    this.taskManagementService.create(this.form.value);
    this.form.reset();

  }

  onAssign(){
   
  }

  //new item starts here

  private alive = true;

  userActivity = [] = [];
  type = 'month';
  types = ['Ongoing', 'Todo', 'Done'];
  currentTheme: string;
  staff = ["Festival Manager", "Volunteer Coordinator", "Transportation Manager", "Box Office Manager"];


  getUserActivity(period: string) {

    this.taskManagementService.getSelected(period).subscribe(result => {
      this.userActivity = result;
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
  get dueDate() {
    return this.today_date;
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
  get requestedBy() {
    return this.form.get("requestedBy");
  }

}

