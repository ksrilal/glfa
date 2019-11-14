import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-volunteers',
  templateUrl: './request-volunteers.component.html',
  styleUrls: ['./request-volunteers.component.scss']
})
export class RequestVolunteersComponent implements OnInit {


  form = new FormGroup({
    eventName: new FormControl("", Validators.required ),
    authorName: new FormControl("", Validators.required ),
    noVol: new FormControl("", Validators.required ),
    pickLoc: new FormControl("", Validators.required ),
    pickTime: new FormControl("", Validators.required ),
    dropLoc: new FormControl("", Validators.required ),
    description: new FormControl("", Validators.required )

  });

  constructor() { }

  ngOnInit() {
  }

}
