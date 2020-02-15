import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { from } from "rxjs";
import { LoginService } from "../app/login/login.service";
@Injectable({
  providedIn: "root"
})
export class AuthguardService implements CanActivate {
  constructor(private lg: LoginService, private router: Router) {}

  canActivate() {
     var roleType = localStorage.getItem("role");

     if (this.lg.isAuthenticated && roleType != null) {
       console.log("user is  authenticated");

       return true;
     } else {
       console.log("user is not authenticated");
       this.router.navigate(["/login"]);

       return false;
     }
  }
}
