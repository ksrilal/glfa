import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-management-service/event.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Event } from '../event-management-service/event.model';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  list: Event[];

  constructor(private service: EventService,
              private firestore: AngularFirestore,) { }

  ngOnInit() {
    this.resetForm();

    this.service.getEvents().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Event;
      })
    })

  }

  onEdit(event: Event) {
    this.service.formData = Object.assign({},event);
  }

  onDelete(id: String) {
    if(confirm("Are you sure to delete this record?")) {
      this.firestore.doc('events/'+id).delete();
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
      author: "",
      date: "",
      venue: "",
      name: "",
      price: "",
      quantity: "",
      soldQuantity: "",
      des: "",
      time: "",
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value) ;
    delete data.id;
    if(form.value.id == null)
     this.firestore.collection('events').add(data);
    else if(confirm("Are you sure to edit this record?")){
      this.firestore.doc('events/' + form.value.id).update(data);
      this.resetForm(form);
      //this.toastr.success('Submitted Successfuly', 'Author Register');
    } 
      
  }



}
