import { Component, OnInit } from '@angular/core';
import { ContactDriversService } from 'src/app/contact-drivers.service';

@Component({
  selector: 'app-contact-drivers',
  templateUrl: './contact-drivers.component.html',
  styleUrls: ['./contact-drivers.component.scss']
})
export class ContactDriversComponent implements OnInit {

  drivers: any[];

  constructor(private contactDriversService: ContactDriversService) {
    contactDriversService.getAll().subscribe(driver=>{
      this.drivers = driver;
    })

  }

  ngOnInit() {
  }

}
