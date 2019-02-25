import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ArticleService } from "../shared/article.service";
import { SRC_NEWS } from "../shared/constants";

@Component({
  selector: "app-header-settings",
  templateUrl: "./header-settings.component.html",
  styleUrls: ["./header-settings.component.css"]
})
export class HeaderSettingsComponent implements OnInit {
  srcNews = SRC_NEWS;
  @Output() onChangedFilter: EventEmitter<string> = new EventEmitter();
  constructor(private articleService: ArticleService) {}
  valueForFiltering = "";
  sourceNews = "";

  ngOnInit() {}

  onChange() {
    this.articleService.showNewsByLocale(this.sourceNews);
  }

  changeValue(value) {
    this.onChangedFilter.emit(value);
  }

  clearFilter() {
    this.valueForFiltering = "";
    this.changeValue("");
  }
}
