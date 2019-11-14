import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthService {


  users$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this.users$ = afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
