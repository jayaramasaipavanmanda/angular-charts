import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as moment from "moment";

@Component({
  selector: "app-total-leads-by-source",
  templateUrl: "./total-leads-by-source.component.html",
  styleUrls: ["./total-leads-by-source.component.css"],
})
export class TotalLeadsBySourceComponent implements OnInit {
  public weekToDateChartColors = [];
  public weeklyChartColors: any[] = [
    { backgroundColor: "#C3BEB4" },
    { backgroundColor: "#3C5C66" },
    { backgroundColor: "#D98F6E" },
    { backgroundColor: "#859485" },
    { backgroundColor: "#6C455A" },
    { backgroundColor: "#FAC757" },
    { backgroundColor: "#444444" },
  ];
  public filterType: string = "week to date";
  public weekToDataBarChartLabels: Label[] = [
    "Podcast",
    "Article",
    "Search Engine",
    "Social Media",
    "Referral",
    "Trade Show",
    "Other",
  ];
  public weeklyBarChartLabels = [];
  public weeklyTitle = "Weekly Total Leads by Source";
  public weekToDateTitle = "Total Leads by Source";

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      const month = moment().format("MMMM");
      const week = moment().add(i, "week");
      const startDate = week.startOf("week").date();
      const endDate = week.endOf("week").date();
      this.weeklyBarChartLabels.push(`${startDate} - ${endDate} ${month}`);
    }
    this.filterType = "week to date";
  }

  public weekToDataBarChartData: ChartDataSets[] = [
    {
      data: [65, 59, 90, 81, 56, 55, 52],
      backgroundColor: [
        "#C3BEB4",
        "#3C5C66",
        "#D98F6E",
        "#859485",
        "#6C455A",
        "#FAC757",
        "#444444",
      ],
      hoverBackgroundColor: ["transparent"],
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
    {
      data: [10, 28, 40, 49, 82, 67, 92],
      stack: "a",
    },
    {
      data: [33, 28, 30, 69, 82, 67, 82],
      stack: "a",
    },
    {
      data: [38, 18, 30, 59, 52, 67, 92],
      stack: "a",
    },
    {
      data: [38, 58, 30, 79, 82, 67, 52],
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
