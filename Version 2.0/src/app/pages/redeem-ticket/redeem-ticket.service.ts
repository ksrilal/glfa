import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class RedeemTicketService {
  constructor(private afs: AngularFirestore) {}

  getData(QR) {
    console.log(QR);
    return this.afs
      .collection("orders")
      .doc(QR)
      .collection("events")
      .valueChanges({ idField: "event" });
  }
  searchDeligate(QR) {
    return this.afs
      .collection("orders")
      .doc(QR)
      .valueChanges();
  }

  redeemTicket(QR) {
    return this.afs
      .collection("orders")
      .doc(QR)
      .update({
        status: true
      });
  }
  // redeemAll(QR, orders) {
  //   orders.forEach(element => {
  //     this.afs
  //       .collection("orders")
  //       .doc(QR)
  //       .collection("events")
  //       .doc(element.id)
  //       .update({
  //         status: true
  //       });
  //   });
  // }
}
