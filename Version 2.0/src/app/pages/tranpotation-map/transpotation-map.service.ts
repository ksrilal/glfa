import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TranspotationMapService {

  constructor(private afs: AngularFirestore) {}

  getAllAuthors(){
    return this.afs.collection('authors').valueChanges();
  }

  getLocation(email){
    return this.afs.collection('authors',ref=>ref.where('email','==',email)).valueChanges();
  }
}

