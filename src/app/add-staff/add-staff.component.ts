import { Component, OnInit } from '@angular/core';
import { Addstaff } from '../add-staff-service/addstaff.model';
import { AddStaffService } from '../add-staff-service/add-staff.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  list: Addstaff[];

  constructor(private service: AddStaffService,
              private firestore: AngularFirestore,) { }

  ngOnInit() {
    this.resetForm();

    this.service.getStaff().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Addstaff;
      })
    }) 
  }

  onEdit(staff: Addstaff) {
    this.service.formData = Object.assign({},staff);
  }

  onDelete(id: String) {
    if(confirm("Are you sure to delete this record?")) {
      this.firestore.doc('staff/'+id).delete();
    }
  }

  resetform(){
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form!=null)
      form.resetForm();
    this.service.formData = {
     id: null,
     fname: "",
     lname: "",
     userName: "",
     dob: "",
     mobile: "",
     email: "",
     password: "",
     des: "",
     roll: "",
     accessName: "",
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value) ;
    delete data.id;
    if(form.value.id == null)
     this.firestore.collection('staff').doc(form.value.email).set(
       data,
     );
    else if(confirm("Are you sure to edit this record?")){
      this.firestore.doc('staff/' + form.value.id).update(data);
      this.resetForm(form);
    } 
  }

}