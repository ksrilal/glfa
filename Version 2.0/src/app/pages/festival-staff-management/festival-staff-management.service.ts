import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FestivalStaffManagementService {

  constructor() { }

   create(msg){
    console.log(msg);
   }
}
