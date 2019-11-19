import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private afs: AngularFirestore) {}

  get(uId: string) {
    return this.afs
      .collection("staff")
      .doc(uId)
      .valueChanges();
  }
}
