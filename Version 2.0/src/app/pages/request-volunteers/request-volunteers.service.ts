import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestVolunteersService {

  constructor(private afs: AngularFirestore) {

  }

   private dueDate = new Date().getDate();
   private hours = new Date().getHours();
   private minutes = new Date().getMinutes();
   private time = this.hours+":"+this.minutes;
    // console.log(time);

  createTasks(tasks){


    const key = tasks.eventName+"+"+this.dueDate+"+"+this.time;
    console.log(key);
    try{
      this.afs.collection('tasks').doc(key).set(tasks);
      alert("Added Successfully");
    }
    catch(error){
      alert("Error");
    }
  }

  createRequest(request){
    try{
      this.afs.collection('requestVolunteers').add(request);
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
