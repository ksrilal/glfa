import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  appUser:any;
  userRoll;

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(user=>{
      this.appUser=user;
      this.userRoll=this.appUser.roll;
      console.log(this.appUser.roll);
    })
   }



  ngOnInit() {
  }

}
