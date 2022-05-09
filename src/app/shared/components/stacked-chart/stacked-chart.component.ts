import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-stacked-chart",
  templateUrl: "./stacked-chart.component.html",
  styleUrls: ["./stacked-chart.component.css"],
})
export class StackedChartComponent implements OnInit {
  // @Input() chartOptions: ChartOptions;
  @Input() colors: any[];
  @Input() labels: string[];
  @Input() chartData: ChartDataSets[];
  @Input() title: string;
  @Input() chartOptions?: ChartOptions;

  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public changeFilter(value: string) {
    console.log(value);
  }

  public toggleChartType(value: ChartType) {
    this.barChartType = value;
  }

  constructor() {}

  ngOnInit() {}
}
