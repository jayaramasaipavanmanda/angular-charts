import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule, ThemeService } from "ng2-charts";
import { SelectComponent } from "./components/select/select.component";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material";

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    ChartsModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ThemeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SelectComponent, MatButtonModule, MatIconModule],
})
export class SharedModule {}
