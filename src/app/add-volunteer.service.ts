import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AddVolunteerService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  create(volunteer) {

    try{
      this.authService.signup(volunteer.email,volunteer.password);
      // this.auth.auth.createUserWithEmailAndPassword(staff.email,staff.password);
      this.afs.collection('volunteer').doc(volunteer.email).set(volunteer);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }


  getAll() {
    return this.afs.collection('volunteer').valueChanges();
  }

}
