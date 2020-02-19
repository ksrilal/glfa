import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketManagementService {

  constructor(private afs: AngularFirestore) { }
  getAllEvents(){
    return this.afs.collection('events').valueChanges();
  }
}
