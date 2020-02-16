import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestVolunteersService {

  constructor(private afs: AngularFirestore) { }

  create(tasks){
    const key = tasks.eventName+"+"+tasks.dueDate+"+"+tasks.time;
    try{
      this.afs.collection('tasks').doc(key).set(tasks);
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
