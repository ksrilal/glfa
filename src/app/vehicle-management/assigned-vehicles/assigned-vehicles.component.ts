import { Component, OnInit } from '@angular/core';
import { VehicleManagementService } from 'src/app/vehicle-management.service';


@Component({
  selector: 'app-assigned-vehicles',
  templateUrl: './assigned-vehicles.component.html',
  styleUrls: ['./assigned-vehicles.component.scss']
})
export class AssignedVehiclesComponent implements OnInit {

  assignedVehicles: any[];

  constructor(private vehicleManagementService: VehicleManagementService) {
    vehicleManagementService.getAssigned().subscribe(assignedVehicle => {
      this.assignedVehicles = assignedVehicle;
    });
   }

  ngOnInit() {
  }

}
