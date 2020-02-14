import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FestivalStaffManagementService {
  
  static getAll() {
    throw new Error("Method not implemented.");
  }

  constructor(private afs: AngularFirestore,) { }

  //  create(msg){
  //   console.log(msg); 
  //  }

  create(staff) {

    try{

      this.afs.collection('staff').doc(staff.name).set(staff);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }

  getAll() {
    return this.afs.collection('staff').valueChanges();
  }


 
}
