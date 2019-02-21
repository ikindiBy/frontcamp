import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { IArticle } from "./IArticle";
import { news } from "./data";

const KEY = "9ea41e2e635e4b6e9aa7c9d2d3d1ec05";
const ALL_CATEGORIES = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology"
];

const stringForGetArticles = `https://newsapi.org/v2/top-headlines?country=gb&category=${
  ALL_CATEGORIES[4]
}&page=0&apiKey=${KEY}`;

const NUMBER_ITEMS = 10;

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  articles: IArticle[] = news;

  getArticle(articleId): IArticle {
    let result;
    this.articles.forEach(article => {
      if (article.id === articleId) result = article;
    });
    return result;
  }

  getArticles(): any {
    return this.http.get<any>(stringForGetArticles).pipe(
      map((response: any) => {
        console.log("resp =  ", response);
        // return response.articles;
        response.articles.forEach((item, ind) => {
          this.articles.push({ ...item, id: Date.now() + ind });
        });
        return this.articles;
      })
    );
    // return this.articles;
  }

  createArticle(article) {
    if (
      article.heading &&
      article.content &&
      article.heading.trim() &&
      article.content.trim()
    ) {
      let dateRaw = new Date();
      let newId = Date.now();
      const date = `${dateRaw.getDate()}/${dateRaw.getMonth() +
        1}/${dateRaw.getFullYear()}`;
      this.articles.forEach(art => {
        if (art.id === newId) newId += 888888888888;
      });
      const newArticle: any = {
        id: newId,
        heading: article.heading,
        content: article.content,
        description: article.description || "...",
        author: article.author || "no name",
        date: article.date || date
      };

      this.articles.push(newArticle);
    }
  }

  readMore(article: IArticle) {
    let indexOfArticle = this.articles.indexOf(article);
    if (indexOfArticle > -1) {
    }
  }

  editArticle(article) {
    if (
      article.heading &&
      article.content &&
      article.heading.trim() &&
      article.content.trim()
    ) {
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
        date: article.date || ""
      };

      this.articles[indexOfArticle] = editedArticle;
    }
  }

  deleteArticle(article: IArticle) {
    let indexOfArticle = this.articles.indexOf(article);
    if (indexOfArticle > -1) {
      this.articles.splice(indexOfArticle, 1);
    }
  }
}
