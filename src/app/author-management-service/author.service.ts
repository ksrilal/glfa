import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { from } from 'rxjs';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  formData: Author;

  constructor(private firestore: AngularFirestore) { }

  getAuthors() {
    return this.firestore.collection('authors').snapshotChanges();
  }
}
