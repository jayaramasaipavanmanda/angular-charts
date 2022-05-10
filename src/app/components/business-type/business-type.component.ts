import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as moment from "moment";

@Component({
  selector: "app-business-type",
  templateUrl: "./business-type.component.html",
  styleUrls: ["./business-type.component.css"],
})
export class BusinessTypeComponent {
  public title = "Trends by Business Type";
  public chartColors: any[] = [
    { backgroundColor: "#859485" },
    { backgroundColor: "#DC5F50" },
    { backgroundColor: "#C4C4C4" },
  ];
  public barChartLabels: Label[] = [
    "Property",
    "Interior Designer",
    "Brand/Retailer",
  ];
  public filterType = "week to date";
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Property", stack: "a" },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: "Interior Designer",
      stack: "a",
    },
    { data: [38, 28, 30, 49, 82, 67, 92], label: "Brand/Retailer", stack: "a" },
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
      align: "end",
      position: "bottom",
      labels: {
        boxWidth: 5,
        fontSize: 12,
        fontColor: "#444444",
        usePointStyle: true,
      },
    },
    tooltips: {
      enabled: false,
    },
    maintainAspectRatio: false,
  };
}
