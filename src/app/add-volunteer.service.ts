import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import {Volunteer} from './models/volunteer.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddVolunteerService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  create(volunteer) {

    try{
       this.authService.signup(volunteer.email,volunteer.passwd);
      // this.auth.auth.createUserWithEmailAndPassword(staff.email,staff.password);
      this.afs.collection('users').doc(volunteer.email).set(volunteer);
      alert("Addedd Successfully");

    }catch(error){
      alert(error);
    }

  }

  /*getVolunteers(){
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('/users').snapshotChanges()
        
      })
  }*/
 /*getVolunteers(): Observable<any> {
    const volunteerList = this.afs.collection('users').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Volunteer;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
      console.log("in services",volunteerList[0]);
    return volunteerList;
  }*/



  


  getAll() {
    return this.afs.collection('users').valueChanges();
  }

}
