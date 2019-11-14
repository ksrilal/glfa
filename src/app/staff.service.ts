import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { }

  create(staff) {

    try{
      this.auth.auth.createUserWithEmailAndPassword(staff.email,staff.password);
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
