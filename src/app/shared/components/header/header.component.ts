import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ChartType } from "chart.js";

@Component({
  selector: "app-shared-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() chartType = new EventEmitter<string>();
  @Output() changeFilterType = new EventEmitter<string>();
  @Input() title: string;
  public options = [
    { value: "week to date", label: "Week to date" },
    { value: "option2", label: "Option2" },
  ];
  public defaultValue = "week to date";
  constructor() {}

  public toggleChartTypeLocal(type: ChartType) {
    this.chartType.emit(type);
  }
  ngOnInit() {}
}
