import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.scss']
})
export class VehicleManagementComponent implements OnInit {

  navLinks = [

    {path: 'all-vehicles', label: 'All Vehicles' },
    {path: 'free-vehicles', label: 'Free Vehicles' },
    {path: 'assigned-vehicles', label: 'Assigned Vehicles' }

  ];

  constructor() { }

  ngOnInit() {
  }

}
