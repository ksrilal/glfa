import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase";
// import { ToastrService } from 'ngx-toastr';


// import { staffType, StaffMem } from "../app/pages/staff/staff.service";
// import { AngularFirestore} from '@angular/fire/firestore';
// import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  userData: Observable<firebase.User>;
  // user$: Observable<StaffMem>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore ,
    // private toastr: ToastrService
  ) {
    this.userData = angularFireAuth.authState;
  }
  isLoggedIn() {
    console.log(this.angularFireAuth.auth.currentUser);
    return this.angularFireAuth.auth.currentUser;
  }

  isAdmin() {
    return (
      this.angularFireAuth.auth.currentUser.email === "dulajdanu@gmail.com"
    );
  }

  isAuthenticated() {
    if (this.angularFireAuth.auth.currentUser != null) {
      console.log(this.angularFireAuth.auth.currentUser);
      return true;
    } else {
      return false;
    }
  }

  getMail() {
    return this.angularFireAuth.auth.currentUser.email;
  }

  SignIn(email: string, password: string) {
    this.afs
      .collection("staff", ref => ref.where("email", "==", email))
      .snapshotChanges()
      .subscribe(res => {
        if (res.length > 0) {
          console.log("doocument exist");

          this.afs
            .collection("staff")
            .doc(email)
            .valueChanges()
            .subscribe(val => {
              // console.log(val);
              localStorage.setItem("role", val["role"]);
              localStorage.setItem("mail", email);
              console.log(localStorage.getItem("role"));
            });

          this.angularFireAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
              // tslint:disable-next-line: no-console
              console.log("You are successfully logged in");
              // this.toastr.success(
              //   "You have successfully logged in",
              //   "Login Successful!"
              // );
              localStorage.setItem("userId", res.user.uid);
              console.log(res.user.uid);

              this.router.navigate(["/pages"]);
            })
            .catch(err => {
              // tslint:disable-next-line: no-console
              console.log("Something is wrong", err.message);
            });
        } else {
          console.log("no document");
          // this.toastr.warning(
          //   "Username or Password is incorrect",
          //   "Login Failed!"
          // );
        }
      });
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => console.log("sent Password Reset Email!"))
      .catch(error => console.log(error));
  }

  SignOut() {
    console.log("signout method in the servic called");
    this.angularFireAuth.auth.signOut();
    localStorage.clear();
  }
  // getEmail() {
  //   return this.angularFireAuth.auth.currentUser.email;
  // }

  static isAdmin() {
    // console.log(LoginService.tempMail);
    // console.log(LoginService.tempMail == "dulajdanu@gmail.com");
    // return LoginService.tempMail == "dulajdanu@gmail.com";
    // console.log(LoginService.tempMail);
  }
}
