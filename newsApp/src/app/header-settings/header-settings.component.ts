import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header-settings",
  templateUrl: "./header-settings.component.html",
  styleUrls: ["./header-settings.component.css"]
})
export class HeaderSettingsComponent implements OnInit {
  @Output() onChangedFilter: EventEmitter<string> = new EventEmitter();
  constructor() {}
  valueForFiltering = "";

  ngOnInit() {}

  changeValue(value) {
    this.onChangedFilter.emit(value);
  }

  clearFilter() {
    this.valueForFiltering = "";
    this.changeValue("");
  }
}
