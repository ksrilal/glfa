import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventManagementService {

  constructor(private afs: AngularFirestore) { }

  create(events) {
    try{
      this.afs.collection('events').add(events);
      alert("Added Successfully");
    }catch(error){
      alert(error);
      
    }
  }
  
  
  
  getAll() {
    return this.afs.collection('events').valueChanges({idField:"id"});
  }
  
  delete(id){
    this.afs.collection('events').doc(id).delete();
  }
  
  edit(id,newData){
    this.afs.collection('events').doc(id).update(newData);
  }
  

}
