import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class TranspotationGuardService implements CanActivate {
  constructor(private lg: LoginService, private router: Router) {}

  canActivate() {
    var roleType = localStorage.getItem("role");
    console.log("the role is " + roleType);
    if (this.lg.isAuthenticated && roleType == "transpotation") {
      return true;
    } else {
      this.router.navigate(["/page"]);

      return false;
    }
  }
}
