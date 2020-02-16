import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PasswordValidators } from "../../validators/password-validator";
import { BoxOfficeStaffService } from "../box-office-staff.service";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "ngx-add-staff",
  templateUrl: "./add-staff.component.html",
  styleUrls: ["./add-staff.component.scss"]
})
export class AddStaffComponent implements OnInit {
  ngOnInit() {}

  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    nic: new FormControl("", [Validators.required]),

    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^[0-9]*$")
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      PasswordValidators.checkPasswrod
    ]),
    pic: new FormControl("", Validators.required)
  });

  constructor(
    private boxOfficeStaffService: BoxOfficeStaffService,
    private afStorage: AngularFireStorage
  ) {}

  downloadURL;

  onSubmit() {
    this.downloadURL = this.afStorage
      .ref("/staff/" + this.randomId)
      .getDownloadURL()
      .subscribe(a => {
        this.downloadURL = a;

        //console.log(this.downloadURL);
        this.form.value.pic = this.downloadURL;
        this.form.value["role"] = "boxOffice";

        this.boxOfficeStaffService.create(this.form.value);
        this.form.reset();
      });

    // this.form.value["role"] = "boxOffice";
    // this.boxOfficeStaffService.create(this.form.value);
    // console.log(this.form.value)
    // this.form.reset();
  }
  randomId;
  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/staff/" + this.randomId, event.target.files[0]);
  }

  get email() {
    return this.form.get("email");
  }
  get nic() {
    return this.form.get("nic");
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
  get mobile() {
    return this.form.get("mobile");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
  get pic() {
    return this.form.get("pic");
  }
}
