import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor(private afs: AngularFirestore) { }
  create(task) {

    try{
      this.afs.collection('tasks').doc(task.task).set(task);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }

  getAll(){
    return this.afs.collection('tasks').valueChanges();
  }

  getTodo(){
    return this.afs.collection('tasks').valueChanges();
  }
}
