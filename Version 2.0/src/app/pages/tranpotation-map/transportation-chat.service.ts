import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransportationChatService {

  constructor(private afs: AngularFirestore) {}

  getAllAuthors(){
    return this.afs.collection('authors').valueChanges();
  }
}
