import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PasswordValidators } from "../validators/password-validator";
import { AccessName } from "../validators/accessName-validator";
import { StaffService } from "../boxoffice.service";

@Component({
  selector: "app-staff-management",
  templateUrl: "./staff-management.component.html",
  styleUrls: ["./staff-management.component.scss"]
})
export class StaffManagementComponent implements OnInit {
  members: any[];

  form = new FormGroup({
    userName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      PasswordValidators.checkPasswrod
    ]),
    accessName: new FormControl("", Validators.required)
  });

  constructor(private staffService: StaffService) {
    staffService.getAll().subscribe(member => {
      this.members = member;
    });
  }

  onSubmit() {
    this.staffService.create(this.form.value);
    this.form.reset();
  }

  get email() {
    return this.form.get("email");
  }
  get userName() {
    return this.form.get("userName");
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
  get accessName() {
    return this.form.get("accessName");
  }

  ngOnInit() {}
}
