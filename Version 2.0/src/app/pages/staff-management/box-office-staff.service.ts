import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class BoxOfficeStaffService {

  constructor(private afs:AngularFirestore,private auth:AngularFireAuth) { }

  create(data){
    console.log(data)
  }
}
