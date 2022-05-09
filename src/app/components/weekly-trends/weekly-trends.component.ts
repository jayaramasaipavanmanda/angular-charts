import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as moment from "moment";

@Component({
  selector: "app-weekly-trends",
  templateUrl: "./weekly-trends.component.html",
  styleUrls: ["./weekly-trends.component.css"],
})
export class WeeklyTrendsComponent implements OnInit {
  public title = "Weekly trends";
  public chartColors: any[] = [
    { backgroundColor: "#859485" },
    { backgroundColor: "#DC5F50" },
    { backgroundColor: "#C4C4C4" },
  ];
  public barChartLabels: Label[] = [];

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
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Pending  Leads", stack: "a" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Rejected Leads", stack: "a" },
    { data: [38, 28, 30, 49, 82, 67, 92], label: "Approved Leads", stack: "a" },
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
