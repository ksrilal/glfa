import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';



@Injectable({
  providedIn: "root"
})
export class AuthService {
  users$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private userService: UserService) {
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

  get appUser$() {
    return this.users$.pipe(
      switchMap(user => {
        if (user) {
          return this.userService.get(user.email);
        }
        return of(null);
      })
    );
  }
}
