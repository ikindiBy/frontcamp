import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IArticle } from "../shared/IArticle";

@Component({
  selector: "app-article-item",
  templateUrl: "./article-item.component.html",
  styleUrls: ["./article-item.component.css"]
})
export class ArticleItemComponent implements OnInit {
  @Input() article: IArticle;
  @Output() delete = new EventEmitter();
  @Output() edite = new EventEmitter();
  @Output() readMore = new EventEmitter();

  onDelete() {
    this.delete.emit(this.article);
  }

  onEdite() {
    this.edite.emit(this.article);
  }

  onReadMore() {
    this.readMore.emit(this.article);
  }

  ngOnInit() {}
}
