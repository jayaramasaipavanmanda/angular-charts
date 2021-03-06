import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { ChartsModule } from "ng2-charts";
import { StackedChartComponent } from "./shared/components/stacked-chart/stacked-chart.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WeeklyTrendsComponent } from "./components/weekly-trends/weekly-trends.component";
import { BusinessTypeComponent } from "./components/business-type/business-type.component";
import { WeeklyTrendsByBusinessTypeComponent } from "./components/weekly-trends-by-business-type/weekly-trends-by-business-type.component";
import { TotalLeadsBySourceComponent } from './components/total-leads-by-source/total-leads-by-source.component';
import { TrendsByPropertyTypeComponent } from './components/trends-by-property-type/trends-by-property-type.component';

@NgModule({
  declarations: [
    AppComponent,
    StackedChartComponent,
    WeeklyTrendsComponent,
    BusinessTypeComponent,
    WeeklyTrendsByBusinessTypeComponent,
    TotalLeadsBySourceComponent,
    TrendsByPropertyTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
