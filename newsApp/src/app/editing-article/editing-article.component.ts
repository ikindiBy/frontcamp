import { Component, OnInit } from "@angular/core";
import { IArticle } from "../shared/IArticle";
import { ArticleService } from "../shared/article.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-editing-article",
  templateUrl: "./editing-article.component.html",
  styleUrls: ["./editing-article.component.css"]
})
export class EditingArticleComponent implements OnInit {
  public editedArticle = {};

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let articleId = this.activatedRoute.snapshot.paramMap.get("id");
    this.editedArticle = this.articleService.getArticleById(articleId);
  }

  editArticle() {
    console.log("____________", this.editedArticle);
    this.articleService.editArticle(this.editedArticle);
  }
}
