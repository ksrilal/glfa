import { Component, OnInit } from "@angular/core";
import {
  UserActive,
  UserActivityData
} from "../../../@core/data/user-activity";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import {
  StatsProgressBarData,
  ProgressInfo
} from "../../../@core/data/stats-progress-bar";
import { TicketManagementService } from "../ticket-management.service";

@Component({
  selector: "ngx-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  ngOnInit() {}
  private alive = true;

  userActivity = ([] = []);
  type = "month";
  types = ["week", "month", "year"];
  currentTheme: string;

  progressInfoData: ProgressInfo[];

  constructor(
    private themeService: NbThemeService,
    private userActivityService: UserActivityData,
    private statsProgressBarService: StatsProgressBarData,
    private ticketManagementService: TicketManagementService
  ) {
    this.statsProgressBarService
      .getProgressInfoData()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.progressInfoData = data;
      });
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });

    // this.getUserActivity(this.type);

    ticketManagementService.getAllEvents().subscribe(result => {
      result.forEach(element => {
        this.userActivity.push(element);
      });
    });
    // console.log(this.userActivity);
  }

  // getUserActivity(period: string) {
  //   this.userActivityService
  //     .getUserActivityData(period)
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe(userActivityData => {
  //       this.userActivity = userActivityData;
  //       console.log(userActivityData);
  //     });
  // }

  ngOnDestroy() {
    this.alive = false;
  }
}
