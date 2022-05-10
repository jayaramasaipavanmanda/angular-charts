import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-stacked-chart",
  templateUrl: "./stacked-chart.component.html",
  styleUrls: ["./stacked-chart.component.css"],
})
export class StackedChartComponent {
  @Input() colors: any[];
  @Input() labels: string[];
  @Input() chartData: ChartDataSets[];
  @Input() title: string;
  @Input() chartOptions?: ChartOptions;
  @Input() selectedValue?: string;
  @Output() filterType = new EventEmitter<string>();

  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public changeFilter(value: string) {
    this.filterType.emit(value);
  }

  public toggleChartType(value: ChartType) {
    this.barChartType = value;
  }

  public options = [
    { value: "week to date", label: "Week to date" },
    { value: "weekly", label: "Weekly" },
  ];
  constructor() {}
}
