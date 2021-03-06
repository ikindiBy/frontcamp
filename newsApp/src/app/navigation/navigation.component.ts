import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  @Input() name: string;
  @Input() adress: object;
  @Output() outputData: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendSomeFromNav() {
    this.outputData.emit("__ Some info from NAV __ ");
  }
}
