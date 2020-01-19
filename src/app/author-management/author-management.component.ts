import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from '../validators/password-validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from '../author-management-service/author.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Author } from '../author-management-service/author.model';

@Component({
  selector: 'app-author-management',
  templateUrl: './author-management.component.html',
  styleUrls: ['./author-management.component.scss']
})
export class AuthorManagementComponent implements OnInit {
  list: Author[];


  constructor(private service: AuthorService,
              private firestore: AngularFirestore,) { }


  ngOnInit() {
    this.resetForm();

    this.service.getAuthors().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Author;
      })
    })

  }

  onEdit(author: Author) {
    this.service.formData = Object.assign({},author);
  }

  onDelete(id: String) {
    if(confirm("Are you sure to delete this record?")) {
      this.firestore.doc('authors/'+id).delete();
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
      uname: "",
      dob: "",
      phone: "",
      email: "",
      passwd: "",
      des: "",
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value) ;
    delete data.id;
    if(form.value.id == null)
     this.firestore.collection('authors').doc(form.value.email).set(
       data,
     );
    else if(confirm("Are you sure to edit this record?")){
      this.firestore.doc('authors/' + form.value.id).update(data);
      this.resetForm(form);
    } 
      
  }

}