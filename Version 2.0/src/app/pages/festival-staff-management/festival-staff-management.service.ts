import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FestivalStaffManagementService {
  

  constructor(private afs: AngularFirestore,) { }

 
  create(staff) {

    try{

      this.afs.collection('staff').doc(staff.email).set(staff);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }

  getAll() {
    return this.afs.collection('staff').valueChanges({idField:"id"});
  }
  delete(id){
    this.afs.collection('staff').doc(id).delete();
  }

  edit(id,newData){
    this.afs.collection('staff').doc(id).update(newData);
  }



 
}
