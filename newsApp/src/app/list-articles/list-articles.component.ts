import { Component, OnInit, Input } from "@angular/core";
import { IArticle } from "../shared/IArticle";
// import { news } from "../shared/data";
import { ArticleService } from "../shared/article.service";

@Component({
  selector: "app-list-articles",
  templateUrl: "./list-articles.component.html",
  styleUrls: ["./list-articles.component.css"]
})
export class ListArticlesComponent implements OnInit {
  @Input() filterValue: string;

  articles: IArticle[];
  canLoadMore: boolean = true;
  valueFromFilter = "";

  constructor(private articleService: ArticleService) {
    this.articles = [];
    // this.valueFromFilter = this.articleService.getFilterValue();
  }

  ngOnInit() {
    // this.articles = this.articleService.getArticles();
    this.articleService.getArticles().subscribe(
      (articles: any) => {
        this.articles = articles;
      },
      error => {
        console.log(error);
      }
    );
  }

  loadMore() {
    this.canLoadMore = this.articleService.loadNextPatchNews();
    console.log(this.canLoadMore);
    this.articleService.getArticles().subscribe(
      (articles: any) => {
        this.articles = articles;
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

  onChangeFilterValue(value: string) {
    this.valueFromFilter = value;
  }
}
