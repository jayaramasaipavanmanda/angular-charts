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
export class SelectComponent {
  @Input() options: IOption[] = [];
  @Input() title: string = "";
  @Input() selectedValue: string;
  @Output() setSelectedValue = new EventEmitter<string>();

  public selectOption() {
    this.setSelectedValue.emit(this.selectedValue);
  }

  constructor() {}
}
