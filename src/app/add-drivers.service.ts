import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddDriversService {

  constructor(private afs: AngularFirestore, private authservice: AuthService ) { }

  create(drivers) {

    try{

      this.afs.collection('drivers').doc(drivers.name).set(drivers);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }

  getAll() {
    return this.afs.collection('drivers').valueChanges();
  }

}
