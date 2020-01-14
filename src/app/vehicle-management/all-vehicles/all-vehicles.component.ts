import { Component, OnInit } from '@angular/core';
import { VehicleManagementService } from 'src/app/vehicle-management.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.scss']
})
export class AllVehiclesComponent implements OnInit {

  allVehicles: any[];

  constructor(private vehicleManagementService: VehicleManagementService) {
    vehicleManagementService.getAll().subscribe(allVehicle => {
      this.allVehicles = allVehicle;
    });
   }

  ngOnInit() {
  }

}
