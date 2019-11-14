import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  create(staff) {

    try{
      this.authService.signup(staff.email,staff.password);
      // this.auth.auth.createUserWithEmailAndPassword(staff.email,staff.password);
      this.afs.collection('staff').doc(staff.email).set(staff);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }


  getAll() {
    return this.afs.collection('staff').valueChanges();
  }


}
