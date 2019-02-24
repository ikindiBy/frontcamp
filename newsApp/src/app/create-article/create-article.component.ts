import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../shared/article.service";
@Component({
  selector: "app-create-article",
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"]
})
export class CreateArticleComponent implements OnInit {
  public newArticle = {};
  constructor(private articleService: ArticleService) {}

  ngOnInit() {}

  createArticle() {
    this.articleService.createArticle(this.newArticle);
  }
}
