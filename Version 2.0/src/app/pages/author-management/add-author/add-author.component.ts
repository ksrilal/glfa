import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from '../../validators/password-validator';
import { AuthorManagementService } from '../author-management.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
  import { from } from 'rxjs';

@Component({
  selector: 'ngx-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  constructor(private afStorage: AngularFireStorage,
    private authorManagement: AuthorManagementService) { }

  ngOnInit() {
  }

  downloadURL;
  randomId;
  latitude: number=0;
  longitude: number=0;

  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/authors/" + this.randomId, event.target.files[0]);
  }

  form = new FormGroup({
    //userName: new FormControl("", Validators.required),
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    des: new FormControl("", Validators.required),
    pic: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    confirmPassword: new FormControl("", [
      Validators.required, Validators.minLength(8),
      PasswordValidators.checkPasswrod
    ]),
    gender: new FormControl("", Validators.required),
    // latitude: new FormControl(""),
    // longitude: new FormControl(""),
  });


  onSubmit() {

    this.downloadURL = this.afStorage
      .ref("/authors/" + this.randomId)
      .getDownloadURL()
      .subscribe(a => {
        this.downloadURL = a;

        //console.log(this.downloadURL);
        //console.log(this.form.value);
        this.form.value.pic = this.downloadURL;
        // this.form.value.latitude = this.latitude;
        // this.form.value.longitude = this.longitude;

        const location = new firebase.firestore.GeoPoint(
          this.latitude,this.longitude
        )
        this.form.value['location']=location;
        
        this.form.value.pic = this.downloadURL;
        //console.log(this.form.value);
        this.authorManagement.create(this.form.value);
        
     this.form.reset();
      });

  }

  get email() {
    return this.form.get("email");
  }
  get fname() {
    return this.form.get("fname");
  }
  get lname() {
    return this.form.get("lname");
  }
  get password() {
    return this.form.get("password");
  }
  get mobile() {
    return this.form.get("mobile");
  }
  get des() {
    return this.form.get("des");
  }
  get pic() {
    return this.form.get("pic");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
  get gender() {
    return this.form.get("gender");
  }


}
