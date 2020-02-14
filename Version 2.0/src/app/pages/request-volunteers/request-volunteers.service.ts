import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestVolunteersService {

  constructor(private afs: AngularFirestore) { }

  create(requestVolunteers){
    try{
      this.afs.collection('requestVolunteers').add(requestVolunteers);
      alert("Added Successfully");
    }
    catch(error){
      alert("Error");
    }
  }

  getAll(){
    return this.afs.collection('requestVolunteers').valueChanges();

  }
}
