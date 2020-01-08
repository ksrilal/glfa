import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-request-volunteers",
  templateUrl: "./request-volunteers.component.html",
  styleUrls: ["./request-volunteers.component.scss"]
})
export class RequestVolunteersComponent implements OnInit {
  form = new FormGroup({
    eventName: new FormControl("", Validators.required),
    authorName: new FormControl("", Validators.required),
    noVol: new FormControl("", Validators.required),
    pickLoc: new FormControl("", Validators.required),
    pickTime: new FormControl("", Validators.required),
    dropLoc: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });

  ngSubmit() {
    console.log("ggg");
  }

  constructor() {}

  ngOnInit() {}

  get eventName() {
    return this.form.get("eventName");
  }

  get authorName() {
    return this.form.get("authorName");
  }

  get noVal() {
    return this.form.get("noVal");
  }

  get pickLoc() {
    return this.form.get("pickLoc");
  }

  get pickTime() {
    return this.form.get("pickTime");
  }

  get dropLoc() {
    return this.form.get("dropLoc");
  }

  get description() {
    return this.form.get("description");
  }
}
