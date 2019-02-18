import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-title",
  templateUrl: "./header-title.component.html",
  styleUrls: ["./header-title.component.css"]
})
export class HeaderTitleComponent implements OnInit {
  public title: string = "Page's title";
  constructor() {}

  ngOnInit() {}
}
