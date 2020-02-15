import { Component, OnInit } from '@angular/core';
import { DriverStateService } from '../driver-state.service';

@Component({
  selector: 'ngx-view-drivers',
  templateUrl: './view-drivers.component.html',
  styleUrls: ['./view-drivers.component.scss']
})
export class ViewDriversComponent implements OnInit {

  allVehicles;
  assignedVehicles;
  freeVehicles;

  constructor(private driverStateService : DriverStateService) {
     this. driverStateService.getAll().subscribe(allVehicle => {
      this.allVehicles = allVehicle;

    });
      this.driverStateService.getFree().subscribe(freeVehicle => {
      this.freeVehicles = freeVehicle;
    });
      this.driverStateService.getAssigned().subscribe(assignedVehicle => {
      this.assignedVehicles = assignedVehicle;
    });

   }

  ngOnInit() {
  }

}
