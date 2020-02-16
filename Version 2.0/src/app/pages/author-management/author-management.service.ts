import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { create } from 'domain';
import * as firebase from "firebase/app";
import { from } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorManagementService {

  constructor(private afs:AngularFirestore,
    private auth: AngularFireAuth,) { }


// create(authors) {
//   try{
//     this.afs.collection('authors').doc(authors.email).set(authors);
//     alert("Added Successfully");
//   }catch(error){
//     alert(error);
    
//   }
// }

create(data) {
  var config = {
    apiKey: "AIzaSyDnQnxvQrAW17USKB1wmbgE0TEZXj-X7mE",
    authDomain: "glf123.firebaseapp.com",
    databaseURL: "https://glf123.firebaseio.com"
  };
  var secondaryApp = firebase.initializeApp(config, "Secondary");

  secondaryApp
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(firebaseUser => {
      // var docRef=this.afs.collection('staff').doc(firebaseUser.user.email);
      console.log("User " + firebaseUser.user.uid + " created successfully!");
      //I don't know if the next statement is necessary
      alert("Added Successfully");

      this.afs
          .collection("authors")
          .doc(firebaseUser.user.email)
          .set(data);
        secondaryApp.auth().signOut();
      })
     
      .catch(err => {
        console.log("HELL" + err.message);
        alert(err.message);
        // this.dialogService.open(ShowcaseDialogComponent, {
        //   context: {
        //     title: err.message
        //   }
        // });
      });
    console.log(data);
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
