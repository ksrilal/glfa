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
    //userName: new FormControl("", Validators.required),
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    role: new FormControl("", Validators.required),
    des: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,Validators.minLength(8),
      PasswordValidators.checkPasswrod
    ]),
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
  // get userName() {
  //   return this.form.get("userName");
  // }
  get fname() {
    return this.form.get("fname");
  }
  get lname() {
    return this.form.get("lname");
  }
  get password() {
    return this.form.get("password");
  }
  get mobile() {
    return this.form.get("mobile");
  }
  get des() {
    return this.form.get("des");
  }
  get role() {
    return this.form.get("des");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
