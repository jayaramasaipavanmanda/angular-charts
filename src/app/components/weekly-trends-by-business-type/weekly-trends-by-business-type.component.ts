import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as moment from "moment";

@Component({
  selector: "app-weekly-trends-by-business-type",
  templateUrl: "./weekly-trends-by-business-type.component.html",
  styleUrls: ["./weekly-trends-by-business-type.component.css"],
})
export class WeeklyTrendsByBusinessTypeComponent implements OnInit {
  public title = "Weekly trends by Business Type";
  public chartColors: any[] = [
    { backgroundColor: "#739198" },
    { backgroundColor: "#FFD2A8" },
    { backgroundColor: "#78616E" },
  ];
  public barChartLabels: Label[] = [];
  public filterType = "week to date";

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      const month = moment().format("MMMM");
      const week = moment().add(i, "week");
      const startDate = week.startOf("week").date();
      const endDate = week.endOf("week").date();
      this.barChartLabels.push(`${startDate} - ${endDate} ${month}`);
    }
  }

  public barChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: "Property",
      stack: "a",
      hoverBackgroundColor: ["transparent"],
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      stack: "a",
      yAxisID: "y-axis-1",
      hoverBackgroundColor: ["transparent"],
      label: "Interior Designer",
    },
    {
      data: [38, 28, 30, 49, 82, 67, 92],
      stack: "a",
      yAxisID: "y-axis-2",
      hoverBackgroundColor: ["transparent"],
      label: "Brand/Retailer",
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
      yAxes: [
        {
          id: "y-axis-1",
          position: "left",
          type: "linear",
          gridLines: {
            display: false,
          },
        },
        {
          id: "y-axis-2",
          position: "right",
          type: "linear",
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
