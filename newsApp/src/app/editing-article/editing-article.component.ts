import { Component, OnInit } from "@angular/core";
import { IArticle } from "../shared/IArticle";
import { ArticleService } from "../shared/article.service";

@Component({
  selector: "app-editing-article",
  templateUrl: "./editing-article.component.html",
  styleUrls: ["./editing-article.component.css"]
})
export class EditingArticleComponent implements OnInit {
  editedArticle = {};

  constructor(private articleService: ArticleService) {}

  ngOnInit() {}

  // public editedArticle: any = {
  //   id: null,
  //   heading: "",
  //   content: "",
  //   description: "",
  //   author: "",
  //   date: ""
  // };

  editArticle() {
    this.articleService.editArticle(this.editedArticle);
  }
}
