import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase/app";
import { from } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FestivalStaffManagementService {
  

  constructor(private afs: AngularFirestore,
    private auth: AngularFireAuth,) { }

 
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
            .collection("staff")
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
    return this.afs.collection('staff').valueChanges({idField:"id"});
  }
  delete(id){
    this.afs.collection('staff').doc(id).delete();
  }

  edit(id,newData){
    this.afs.collection('staff').doc(id).update(newData);
  }



 
}
