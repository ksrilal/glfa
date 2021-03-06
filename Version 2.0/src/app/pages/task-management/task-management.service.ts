import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  profileData: any[];

  constructor(private fire:AngularFireAuth,private afs: AngularFirestore) { }
  create(task) {
    const key=task.task+"+"+task.dueDate+"+"+task.time;
    console.log(key)
    try {
      
     this.afs.collection('tasks').doc(key).set(task);
     // this.afs.collection('tasks').doc(task.task).collection('volunteers').doc('email').set(task);
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
  getVolunteers(task?){
    try{
       return this.afs.collection('tasks').doc(task).collection('volunteers').valueChanges({idField:"id"});
    }catch(error){
      alert(error);
    }
  }

  getSelected(period?) {
    try{
      return this.afs.collection('tasks',ref=>ref.where('status','==',period)).valueChanges({idField:"id"});
    }catch(error){
      alert(error);
    }
    
  }

  getUnassignedTasks(){
    try{
      return this.afs.collection('tasks',ref=>ref.where('status','==',"Todo")).valueChanges({idField:"id"});
    }catch(error){
      alert(error);
    }
  }

  getAvailableVolunteers(){
    try{
      return this.afs.collection('volunteers',ref=>ref.where('availability','==',"true")).valueChanges({idField:"id"});
    }catch(error){
      alert(error);
    }
  }

  delete(id){
    this.afs.collection('tasks').doc(id).delete();
  }

  edit(id,newData){
    this.afs.collection('tasks').doc(id).update(newData);
  }

  assignVolunteer(volun,tsk){
   // const k=volun+"+"+tsk;
    const key=tsk.task+"+"+tsk.dueDate+"+"+tsk.time;
    console.log(key)
    try{
    this.afs.collection('volunteers').doc(volun.email).update(volun);
    this.afs.collection('tasks').doc(key).update(tsk);
    this.afs.collection('volunteers').doc(volun.email).collection('tasks').doc(key).set(tsk);
  //  this.afs.collection('tasks').doc(key).set({});
   this.afs.collection('tasks').doc(key).collection('volunteers').doc(volun.email).set(volun);
    //this.afs.collection('tasks',ref=>ref.where('')).doc(key).collection('volunteers').doc(volun.email).set(volun);
    alert("Addedd Successfully");  
    }catch(error){
      alert(error);
    }
  }
  
}
