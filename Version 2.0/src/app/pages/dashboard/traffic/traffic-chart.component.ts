import { delay, takeWhile } from "rxjs/operators";
import { AfterViewInit, Component, Input, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { LayoutService } from "../../../@core/utils";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "ngx-traffic-chart",
  template: `
    <div
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `
})
export class TrafficChartComponent implements AfterViewInit, OnDestroy {
  private alive = true;

  // @Input() points: number[];
  points: number[] =[10,20,5,30,23];
  // points: number[] = [];

  // type = 'DAY';
  // types = ['Day 1', 'Day 2', 'Day 3' , 'Day 3' , 'Day 4' , 'Day 5'];
  option: any = {};
  echartsIntance: any;

  constructor(
    private theme: NbThemeService,
    private layoutService: LayoutService,
    private dashboardService: DashboardService
  ) {
    this.layoutService
      .onChangeLayoutSize()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.resizeChart());

  }

  ngAfterViewInit() {

    this.dashboardService.getAll().subscribe(result => {
      console.log(result[0]["totalItems"]);
      this.points = [];
      result.forEach(element => {
        this.points.push(element["totalItems"]);
      });
      console.log(this.points);
      // this.points = [1, 2, 3, 4, 5, 6];
    });
    this.theme
      .getJsTheme()
      .pipe(
        delay(1),
        takeWhile(() => this.alive)
      )
      .subscribe(config => {
        const trafficTheme: any = config.variables.traffic;

        this.option = Object.assign(
          {},
          {
            grid: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: this.points
            },
            yAxis: {
              boundaryGap: [0, "5%"],
              axisLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: trafficTheme.yAxisSplitLine,
                  width: "1"
                }
              }
            },
            tooltip: {
              axisPointer: {
                type: "shadow"
              },
              textStyle: {
                color: trafficTheme.tooltipTextColor,
                fontWeight: trafficTheme.tooltipFontWeight,
                fontSize: 16
              },
              position: "top",
              backgroundColor: trafficTheme.tooltipBg,
              borderColor: trafficTheme.tooltipBorderColor,
              borderWidth: 1,
              formatter: "{c0} MB",
              extraCssText: trafficTheme.tooltipExtraCss
            },
            series: [
              {
                type: "line",
                symbol: "circle",
                symbolSize: 8,
                sampling: "average",
                silent: true,
                itemStyle: {
                  normal: {
                    color: trafficTheme.shadowLineDarkBg
                  },
                  emphasis: {
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0
                  }
                },
                lineStyle: {
                  normal: {
                    width: 2,
                    color: trafficTheme.shadowLineDarkBg
                  }
                },
                data: this.points.map(p => p - 15)
              },
              {
                type: "line",
                symbol: "circle",
                symbolSize: 6,
                sampling: "average",
                itemStyle: {
                  normal: {
                    color: trafficTheme.itemColor,
                    borderColor: trafficTheme.itemBorderColor,
                    borderWidth: 2
                  },
                  emphasis: {
                    color: "white",
                    borderColor: trafficTheme.itemEmphasisBorderColor,
                    borderWidth: 2
                  }
                },
                lineStyle: {
                  normal: {
                    width: 2,
                    color: trafficTheme.lineBg,
                    shadowColor: trafficTheme.lineBg,
                    shadowBlur: trafficTheme.lineShadowBlur
                  }
                },
                areaStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: trafficTheme.gradFrom
                      },
                      {
                        offset: 1,
                        color: trafficTheme.gradTo
                      }
                    ]),
                    opacity: 1
                  }
                },
                data: this.points
              }
            ]
          }
        );
      });
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
