import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import * as moment from "moment";
import { Label } from "ng2-charts";

@Component({
  selector: "app-trends-by-property-type",
  templateUrl: "./trends-by-property-type.component.html",
  styleUrls: ["./trends-by-property-type.component.css"],
})
export class TrendsByPropertyTypeComponent implements OnInit {
  public weekToDateChartColors = [
    { backgroundColor: "#859485" },
    { backgroundColor: "#DC5F50" },
    { backgroundColor: "#CCCCCC" },
  ];
  public weeklyChartColors: any[] = [
    { backgroundColor: "#739198" },
    { backgroundColor: "#FAC757" },
    { backgroundColor: "#D98F6E" },
  ];
  public filterType: string = "week to date";
  public weekToDataBarChartLabels: Label[] = [
    "Independent Short Term Rental(s)",
    "Property Manager or Aggregator ",
    "Boutique or Apartment Hotel",
  ];
  public weeklyBarChartLabels = [];
  public weeklyTitle = "Weekly Trends by Property Type";
  public weekToDateTitle = "Trends by Property Type";

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      const month = moment().format("MMMM");
      const week = moment().add(i, "week");
      const startDate = week.startOf("week").date();
      const endDate = week.endOf("week").date();
      this.weeklyBarChartLabels.push(`${startDate} - ${endDate} ${month}`);
    }
  }

  public weekToDataBarChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: "Independent Short Term Rental(s)",
      stack: "a",
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      stack: "a",
      label: "Property Manager or Aggregator ",
    },
    {
      data: [38, 28, 30, 49, 82, 67, 92],
      stack: "a",
      label: "Boutique or Apartment Hotel",
    },
  ];

  public weeklyDataBarChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      stack: "a",
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      stack: "a",
    },
    {
      data: [38, 28, 30, 49, 82, 67, 92],
      stack: "a",
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    maintainAspectRatio: false,
  };

  public changeFilterType(value: string) {
    this.filterType = value;
  }
}
