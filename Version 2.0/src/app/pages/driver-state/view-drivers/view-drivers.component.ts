import { Component, OnInit } from '@angular/core';
import { DriverStateService } from '../driver-state.service';

@Component({
  selector: 'ngx-view-drivers',
  templateUrl: './view-drivers.component.html',
  styleUrls: ['./view-drivers.component.scss']
})
export class ViewDriversComponent implements OnInit {

  allVehicles=[]=[];
  assignedVehicles=[]=[];
  freeVehicles=[]=[];

  constructor(private driverStateService : DriverStateService) {
     this. driverStateService.getAll().subscribe(allVehicle => {
      this.allVehicles=[];
      this.assignedVehicles=[];
      this.freeVehicles=[];
      // console.log(allVehicle)
      allVehicle.forEach(element => {
        this.allVehicles.push(element);
        if(element['availble']==true){
          this.assignedVehicles.push(element)
        }else if(element['availble']==false){
          this.freeVehicles.push(element)
        }
      });

      console.log(this.allVehicles);
      console.log(this.assignedVehicles);
      console.log(this.freeVehicles);

    });


   }

  ngOnInit() {
  }

}
