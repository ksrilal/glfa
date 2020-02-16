import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestVolunteersService {

  constructor(private afs: AngularFirestore) { }

  create(tasks){
    try{
      this.afs.collection('tasks').add(tasks);
      alert("Added Successfully");
    }
    catch(error){
      alert("Error");
    }
  }

  getAll(){
    return this.afs.collection('tasks').valueChanges();

  }
}
