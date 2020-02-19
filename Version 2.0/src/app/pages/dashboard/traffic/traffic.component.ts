import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { TrafficChartData } from '../../../@core/data/traffic-chart';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'ngx-traffic',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <nb-card size="tiny">
      <nb-card-header>
        <span>Delegates Summary</span>

        <!-- <nb-select [(selected)]="type"> -->
          <!-- <nb-option *ngFor="let t of types" [value]="t">{{ t }}</nb-option> -->
        <!-- </nb-select> -->
      </nb-card-header>

      <ngx-traffic-chart ></ngx-traffic-chart>
    </nb-card>
  `,
})
export class TrafficComponent implements OnDestroy {

  private alive = true;

  trafficChartPoints: number[]=[];
  type = 'day';
  types = ['Day 1', 'Day 2', 'Day 3' , 'Day 4' , 'Day 5'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private trafficChartService: TrafficChartData,private dashboardService:DashboardService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
      this.currentTheme = theme.name;
    });


    this.trafficChartService.getTrafficChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        console.log(data);
        this.trafficChartPoints = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
