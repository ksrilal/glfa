import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class VolunteerManagementService {

  
  constructor(private afs: AngularFirestore, private auth:AngularFireAuth) { 
    console.log("in services",this.getAll());
  }

  create(volunteer) {

    try{
      // this.authService.signup(volunteer.email,volunteer.passwd);//leave this only
      // this.auth.auth.createUserWithEmailAndPassword(staff.email,staff.password);
      this.afs.collection('volunteers').doc(volunteer.email).set(volunteer);
      
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
    if(Object.keys(this.afs.collection('volunteers').valueChanges()).length==0){
      console.log("in servics getall..null set");
    }else{
      console.log("in services, length of getall,",Object.keys(this.afs.collection('volunteers').valueChanges()).length);
    }
    try{
      return this.afs.collection('volunteers').valueChanges({idField:"id"});
    }catch(error){
      alert(error);
    }
    
  }

  delete(id){
    this.afs.collection('volunteers').doc(id).delete();
  }

  edit(id,newData){
    this.afs.collection('volunteers').doc(id).update(newData);
  }
}
