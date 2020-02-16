import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilterSalesService {

  constructor(private afs:AngularFirestore) {

   }

   getDates(){
     return this.afs.collection('redeem').valueChanges({idField:'day'});
   }

   getSales(day){
     return this.afs.collection('redeem').doc(day).collection('orders').valueChanges();
   }
}
