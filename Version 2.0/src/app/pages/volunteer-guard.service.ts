import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: "root"
})
export class VolunteerGuardService implements CanActivate {
  constructor(private lg: LoginService, private router: Router) {}

  canActivate() {
    var roleType = localStorage.getItem("role");
    console.log("the role is " + roleType);
    if (this.lg.isAuthenticated && roleType == "volunteer") {
      return true;
    } else {
      this.router.navigate(["/page"]);

      return false;
    }
  }
}
