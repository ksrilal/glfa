import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class TicketOrderService {
  constructor(private afs: AngularFirestore) {}

  searchOrder(QR) {
    return this.afs
      .collection("orders")
      .doc(QR.value)
      .collection("events")
      .valueChanges({ idField: "id" });
  }
  searchDeligate(QR) {
    return this.afs
      .collection("orders")
      .doc(QR.value)
      .valueChanges();
  }

  redeemTicket(QR, ticketId) {
    return this.afs
      .collection("orders")
      .doc(QR)
      .collection("events")
      .doc(ticketId)
      .update({
        status: true
      });
  }
  redeemAll(QR, orders) {
    orders.forEach(element => {
      this.afs
        .collection("orders")
        .doc(QR)
        .collection("events")
        .doc(element.id)
        .update({
          status: true
        });
    });
  }
}
