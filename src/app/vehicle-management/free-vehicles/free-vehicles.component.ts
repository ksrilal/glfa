import { Component, OnInit } from '@angular/core';
import { VehicleManagementService } from 'src/app/vehicle-management.service';

@Component({
  selector: 'app-free-vehicles',
  templateUrl: './free-vehicles.component.html',
  styleUrls: ['./free-vehicles.component.scss']
})
export class FreeVehiclesComponent implements OnInit {

  freeVehicles: any[];

  constructor(private vehicleManagementService: VehicleManagementService) {
    vehicleManagementService.getFree().subscribe(freeVehicle => {
      this.freeVehicles = freeVehicle;
    });
   }

  ngOnInit() {
  }

}
