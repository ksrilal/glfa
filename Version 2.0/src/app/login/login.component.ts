import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}
  form = new FormGroup({
    e_mail: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  get e_mail() {
    return this.form.get("e_mail");
  }
  get password() {
    return this.form.get("password");
  }

  onSubmit(e_mail, password) {
    // tslint:disable-next-line: no-console
    console.log("hello");
    this.loginService.SignIn(e_mail, password);
  }
}
