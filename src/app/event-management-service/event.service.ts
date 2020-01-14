import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  formData: Event;

  constructor(private firestore: AngularFirestore) { }

  getEvents() {
    return this.firestore.collection('events').snapshotChanges();
  }
}
