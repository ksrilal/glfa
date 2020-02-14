import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VolunteerManagementService {


  constructor(private afs: AngularFirestore,) {
    console.log("in services",this.getAll());
  }

  create(volunteer) {

  //   try{
  //      this.authService.signup(volunteer.email,volunteer.passwd);
  //     // this.auth.auth.createUserWithEmailAndPassword(staff.email,staff.password);
  //     this.afs.collection('users').doc(volunteer.email).set(volunteer);
  //     alert("Addedd Successfully");

  //   }catch(error){
  //     alert(error);
  //   }

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
    if(Object.keys(this.afs.collection('users').valueChanges()).length==0){
      console.log("in servics getall..null set");
    }else{
      console.log("in services, length of getall,",Object.keys(this.afs.collection('users').valueChanges()).length);
    }
    try{
      return this.afs.collection('users').valueChanges();
    }catch(error){
      alert(error);
    }

  }
}
