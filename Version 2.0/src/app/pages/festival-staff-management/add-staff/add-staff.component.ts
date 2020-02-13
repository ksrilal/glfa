import { Component, OnInit } from "@angular/core";
import { PasswordValidators } from "../../validators/password-validator";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "ngx-add-staff",
  templateUrl: "./add-staff.component.html",
  styleUrls: ["./add-staff.component.scss"]
})
export class AddStaffComponent implements OnInit {
  constructor(private afStorage: AngularFireStorage) {}

  ngOnInit() {}

  downloadURL;
  randomId;

  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/events/" + this.randomId, event.target.files[0]);
  }

  form = new FormGroup({
    userName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    role: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
  });

  onSubmit() {

    // this.staffService.create(this.form.value);
    this.downloadURL = this.afStorage
    .ref("/events/" + this.randomId)
    .getDownloadURL()
    .subscribe(a => {
      this.downloadURL = a;

        console.log(this.downloadURL);
      });

    this.form.reset();
  }

  get email() {
    return this.form.get("email");
  }
  get userName() {
    return this.form.get("userName");
  }
  get firstName() {
    return this.form.get("firstName");
  }
  get lastName() {
    return this.form.get("lastName");
  }
  get password() {
    return this.form.get("password");
  }
  get phone() {
    return this.form.get("phone");
  }
  get description() {
    return this.form.get("description");
  }

  get role() {
    return this.form.get("description");
  }
}
