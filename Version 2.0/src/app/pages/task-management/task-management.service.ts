import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  constructor(private afs: AngularFirestore) { }
  create(task) {
    try {
      this.afs.collection('tasks').doc(task.task).set(task);
      alert("Addedd Successfully");
    }
    catch (error) {
      alert(error);
    }
  }
  getAll() {
    if(Object.keys(this.afs.collection('tasks').valueChanges()).length==0){
      console.log("in servics getall..null set");
    }else{
      console.log("in services, length of getall,",Object.keys(this.afs.collection('tasks').valueChanges()).length);
    }
    try{
      return this.afs.collection('tasks').valueChanges({idField:"id"});
    }catch(error){
      alert(error);
    }
    
  }
  getTodo() {
    return this.afs.collection('tasks').valueChanges();
  }

  delete(id){
    this.afs.collection('tasks').doc(id).delete();
  }

  edit(id,newData){
    this.afs.collection('tasks').doc(id).update(newData);
  }
}

