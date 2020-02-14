import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { create } from 'domain';

@Injectable({
  providedIn: 'root'
})
export class AuthorManagementService {

  constructor(private afs:AngularFirestore) { }


create(authors) {
  try{
    this.afs.collection('authors').doc(authors.email).set(authors);
    alert("Added Successfully");
  }catch(error){
    alert(error);
    
  }
}



getAll() {
  return this.afs.collection('authors').valueChanges({idField:"id"});
}

delete(id){
  this.afs.collection('authors').doc(id).delete();
}

edit(id,newData){
  this.afs.collection('authors').doc(id).update(newData);
}

}
