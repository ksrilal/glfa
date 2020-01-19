import { Injectable } from '@angular/core';
import { Addstaff } from './addstaff.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddStaffService {
  formData: Addstaff;

  constructor(private firestore: AngularFirestore) { }

  getStaff() {
    return this.firestore.collection('staff').snapshotChanges();
  }

}