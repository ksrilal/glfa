import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Galle Literay Festival';

  constructor(private authService: AuthService, router: Router){
    authService.users$.subscribe(user=>{
      if(!user) return;

      router.navigate(['/staff']);
    })
  }
}
