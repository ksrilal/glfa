import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestVolunteersService {

  constructor(private afs: AngularFirestore, private authservice: AuthService) { }

  create(requestVolunteers) {

    try{

      this.afs.collection('requestVolunteers').doc(requestVolunteers.noVol).set(requestVolunteers);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }

  getAll() {
    return this.afs.collection('requset_volunteers').valueChanges();
  }

}
