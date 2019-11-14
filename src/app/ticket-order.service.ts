import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketOrderService {

  constructor(private afs: AngularFirestore) { }


  searchOrder(QR) {
    return this.afs.collection('orders').doc(QR.value).collection('events').valueChanges();
  }
  searchDeligate(QR) {
    return this.afs.collection('orders').doc(QR.value).valueChanges();
  }
}
