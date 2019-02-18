import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "../shared/article.service";
import { IArticle } from "../shared/IArticle";

@Component({
  selector: "app-article-page",
  templateUrl: "./article-page.component.html",
  styleUrls: ["./article-page.component.css"]
})
export class ArticlePageComponent implements OnInit {
  @Input() article: IArticle;
  @Output() delete = new EventEmitter();

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let articleId = this.activatedRoute.snapshot.paramMap.get("id");
    this.article = this.articleService.getArticle(+articleId);
  }

  onDelete() {
    this.articleService.deleteArticle(this.article);
    this.router.navigate(["/"]);
  }
}
