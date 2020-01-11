import { Component, OnInit } from '@angular/core';
import { ContactDriversService } from 'src/app/contact-drivers.service';

@Component({
  selector: 'app-contact-drivers',
  templateUrl: './contact-drivers.component.html',
  styleUrls: ['./contact-drivers.component.scss']
})
export class ContactDriversComponent implements OnInit {

  drivers: any[];

  constructor(contactDriversService: ContactDriversService) {
    contactDriversService.getAll().subscribe(drivers=>{
      this.drivers = drivers;
    })

  }

  ngOnInit() {
  }

}
