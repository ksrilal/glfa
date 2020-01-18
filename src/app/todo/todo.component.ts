import { Component, OnInit,Input } from '@angular/core';
import {AddTaskService} from '../add-task.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input("task") task;

 


  constructor(private addTaskService:AddTaskService) {
    
   }

  ngOnInit() {
  }

}
