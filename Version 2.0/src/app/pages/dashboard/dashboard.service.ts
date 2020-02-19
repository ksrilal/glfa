import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private afs:AngularFirestore) { }

  getAll(){
    return this.afs.collection('orders').valueChanges();
  }
  getAllAuthors(){
    return this.afs.collection('authors').valueChanges();
  }
  getAllEvents(){
    return this.afs.collection('events').valueChanges();
  }
}
