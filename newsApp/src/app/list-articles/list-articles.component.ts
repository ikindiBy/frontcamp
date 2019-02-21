import { Component, OnInit } from "@angular/core";
import { IArticle } from "../shared/IArticle";
// import { news } from "../shared/data";
import { ArticleService } from "../shared/article.service";

@Component({
  selector: "app-list-articles",
  templateUrl: "./list-articles.component.html",
  styleUrls: ["./list-articles.component.css"]
})
export class ListArticlesComponent implements OnInit {
  articles: IArticle[];

  constructor(private articleService: ArticleService) {
    this.articles = [];
  }

  ngOnInit() {
    // this.articles = this.articleService.getArticles();
    this.articleService.getArticles().subscribe(
      (articles: any) => {
        this.articles = articles;
        console.log(this.articles[0]);
      },
      error => {
        console.log(error);
      }
    );
  }

  editeArticle(article: IArticle) {
    this.articleService.editArticle(article);
  }

  deleteArticle(article: IArticle) {
    this.articleService.deleteArticle(article);
  }

  readMoreArticle(article: IArticle) {
    this.articleService.readMore(article);
  }
}
