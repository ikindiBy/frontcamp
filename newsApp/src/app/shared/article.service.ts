import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { IArticle } from "./IArticle";
import { ALL_CATEGORIES, SRC_NEWS, imgWithoutSrc, KEY } from "./constants";

const NUMBER_ITEMS = 5;
const apiName = "https://newsapi.org/v2/top-headlines";
const apiNameLocale = "http://localhost:3000/";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient, private router: Router) {}

  articles: IArticle[] = [];
  pageNumber: number = 1;
  lastPage: number = 1;
  totalResultsOfQuery: number = 0;
  canLoadNext = false;
  curentUser: string = "copiraters4ik";
  locale = SRC_NEWS.local;

  getArticleById(articleId): IArticle {
    let result;
    this.articles.forEach(article => {
      if (article.id === articleId) result = article;
    });
    return result;
  }

  // I think it is not well desigion, there should be normal cache
  getArticles(): any {
    console.log("sdfsdfsdfsf =  ");
    this.articles = [];
    let stringForGetArticles;

    if (this.locale === SRC_NEWS.local) {
      stringForGetArticles = apiNameLocale;
    } else if (this.locale === SRC_NEWS.global) {
      stringForGetArticles = `${apiName}?country=gb&category=${
        ALL_CATEGORIES[4]
      }&page=${this.pageNumber}&pageSize=${NUMBER_ITEMS}&apiKey=${KEY}`;
    }

    return this.http.get<any>(stringForGetArticles).pipe(
      map((response: any) => {
        console.log("resp =  ", response);
        this.totalResultsOfQuery = response.totalResults;
        this.lastPage = this.totalResultsOfQuery / NUMBER_ITEMS;

        response.articles.forEach((item, ind) => {
          this.articles.push({
            ...item,
            id: item._id || ind,
            heading: item.heading || item.title
          });
        });
        return this.articles;
      })
    );
  }

  createArticle(article) {
    if (
      article.heading &&
      article.content &&
      article.heading.trim() &&
      article.content.trim()
    ) {
      let dateRaw = new Date();

      const dateAuto = `${dateRaw.getDate()}/${dateRaw.getMonth() +
        1}/${dateRaw.getFullYear()}`;

      const newArticle: any = {
        heading: article.heading,
        content: article.content,
        description: article.description || "//without description(",
        author: article.author || "no name",
        publishedAt: article.publishedAt || dateAuto,
        urlToImage: article.urlToImage || imgWithoutSrc
      };
      let pathPost = apiNameLocale + "createArticle";

      // let headers = new Headers({ "Content-Type": "application/json" });
      // let options = new RequestOptions({ headers: headers });
      this.http
        .post<any>(pathPost, newArticle) // ,httpOptions
        .subscribe(
          data => {
            console.log("POST Request is successful ", data);
          },
          error => {
            console.log("Error", error);
          }
        );
    }
  }

  deleteArticle(id: any) {
    let pathDelete = `${apiNameLocale}deleteArticle/${id}`;
    this.http.delete<any>(pathDelete).subscribe(
      data => {
        console.log("DELETE Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
    let indexOfArticle;

    this.articles.forEach((article, index) => {
      if (article.id === id) {
        indexOfArticle = index;
      }
    });
    // let indexOfArticle = this.articles.indexOf(article);
    if (indexOfArticle > -1) {
      this.articles.splice(indexOfArticle, 1);
    }
  }

  editArticle(article) {
    let pathEdit = `${apiNameLocale}updateArticle/${article.id}`;
    if (
      article.heading &&
      article.content &&
      article.heading.trim() &&
      article.content.trim()
    ) {
      const dateRaw = new Date();
      const dateAuto = `${dateRaw.getDate()}/${dateRaw.getMonth() +
        1}/${dateRaw.getFullYear()}`;

      let indexOfArticle;

      this.articles.forEach((art, index) => {
        if (art.id === article.id) indexOfArticle = index;
      });

      const editedArticle: any = {
        id: article.id,
        heading: article.heading,
        content: article.content,
        description: article.description || "",
        author: article.author || "no name",
        publishedAt: dateAuto,
        urlToImage: article.urlToImage || imgWithoutSrc
      };

      this.http
        .post<any>(pathEdit, editedArticle) // ,httpOptions
        .subscribe(
          data => {
            console.log("POST for  Edit  Request is successful ", data);
          },
          error => {
            console.log("Error", error);
          }
        );

      this.articles[indexOfArticle] = editedArticle;
    }
  }

  readMore(article: IArticle) {
    let indexOfArticle = this.articles.indexOf(article);
    if (indexOfArticle > -1) {
    }
  }

  loadNextPatchNews() {
    if (this.pageNumber < this.lastPage) {
      this.pageNumber++;
      if (this.pageNumber < this.lastPage - 1) {
        return true;
      } else return false;
    }
  }

  showNewsByLocale(locale) {
    this.locale = locale;
    console.log("-----------------", this.locale);
    this.router.navigate(["/list"]);
  }
}
