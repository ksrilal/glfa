import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VehicleManagementService {

  constructor(private afs: AngularFirestore) {

  }

  getAll(){
    return this.afs.collection('drivers').valueChanges();

  }

  getFree(){
    return this.afs.collection('drivers.available==true').valueChanges();
  }

  getAssigned(){
    return this.afs.collection('drivers.available==false').valueChanges();

  }
}
