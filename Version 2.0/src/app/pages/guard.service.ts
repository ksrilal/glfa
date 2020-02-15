import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { from } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: "root"
})
export class GuardService implements CanActivate {
  constructor(private lg: LoginService, private router: Router) {}

  canActivate() {
    var roleType = localStorage.getItem("role");
    console.log("the role is " + roleType);
    if (this.lg.isAuthenticated) {
      return false;

    } else {
      this.router.navigate(["/login"]);

      return false;
    }
  }
}
