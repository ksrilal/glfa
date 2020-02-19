import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import { SolarData } from "../../@core/data/solar";
import { DashboardService } from "./dashboard.service";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: "ngx-dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnDestroy {
  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: "Light",
    iconClass: "nb-lightbulb",
    type: "primary"
  };
  rollerShadesCard: CardSettings = {
    title: "Roller Shades",
    iconClass: "nb-roller-shades",
    type: "success"
  };
  // wirelessAudioCard: CardSettings = {
  //   title: 'Wireless Audio',
  //   iconClass: 'nb-audio',
  //   type: 'info',
  // };
  // coffeeMakerCard: CardSettings = {
  //   title: 'Coffee Maker',
  //   iconClass: 'nb-coffee-maker',
  //   type: 'warning',
  // };

  statusCards: string;

  // commonStatusCardsSet: CardSettings[] = [
  //   this.lightCard,
  //   this.rollerShadesCard,
  //   this.wirelessAudioCard,
  //   this.coffeeMakerCard,
  // ];

  // statusCardsByThemes: {
  //   default: CardSettings[];
  //   cosmic: CardSettings[];
  //   corporate: CardSettings[];
  //   dark: CardSettings[];
  // } = {
  //   default: this.commonStatusCardsSet,
  //   cosmic: this.commonStatusCardsSet,
  //   corporate: [
  //     {
  //       ...this.lightCard,
  //       type: 'warning',
  //     },
  //     {
  //       ...this.rollerShadesCard,
  //       type: 'primary',
  //     },
  //     {
  //       ...this.wirelessAudioCard,
  //       type: 'danger',
  //     },
  //     {
  //       ...this.coffeeMakerCard,
  //       type: 'info',
  //     },
  //   ],
  //   dark: this.commonStatusCardsSet,
  // };

  totalPrice = 0;
  totalItems = 0;
  noOfAuthors;
  noOfEvents;

  constructor(
    private themeService: NbThemeService,
    private solarService: SolarData,
    private dashboardService: DashboardService
  ) {
    dashboardService.getAll().subscribe(result => {
      // console.log(result[0]["totalItems"]);
      this.totalPrice = 0;
      this.totalItems = 0;
      result.forEach(element => {
        this.totalItems += element["totalItems"];
        this.totalPrice += element["totalPrice"];
      });
    });
    dashboardService.getAllAuthors().subscribe(authors => {
      this.noOfAuthors = authors.length;
    });
    dashboardService.getAllEvents().subscribe(events => {
      this.noOfEvents = events.length;
    });
    // this.themeService
    //   .getJsTheme()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(theme => {
    //     this.statusCards = this.statusCardsByThemes[theme.name];
    //   });

    this.solarService
      .getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
