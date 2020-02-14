import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { create } from 'domain';

@Injectable({
  providedIn: 'root'
})
export class DriverManagementService {


  constructor(private afs:AngularFirestore) {}

    create(drivers) {

      try{

        this.afs.collection('drivers').doc(drivers.nic).set(drivers);
        alert("Addedd Successfully");

      }catch(error){
        alert(error);
      }

    }

    getAll() {
      return this.afs.collection('drivers').valueChanges({idField:"id"});
    }
    delete(id){
      this.afs.collection('drivers').doc(id).delete();
    }

    edit(id,newData){
      this.afs.collection('drivers').doc(id).update(newData);
    }

   }

