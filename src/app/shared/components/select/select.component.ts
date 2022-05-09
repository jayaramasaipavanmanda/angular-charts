import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

interface IOption {
  label: string;
  value: string;
}

@Component({
  selector: "app-shared-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
})
export class SelectComponent implements OnInit {
  @Input() options: IOption[] = [];
  @Input() title: string = "";
  @Input() defaultValue: string = "";
  @Output() setSelectedValue = new EventEmitter<string>();

  public selectedValue: string = "week to date";

  public selectOption(value: string) {
    this.setSelectedValue.emit(value);
    this.selectedValue = value;
  }

  constructor() {}

  ngOnInit() {}
}
