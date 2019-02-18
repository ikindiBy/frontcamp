import { IArticle } from "./IArticle";
import { news } from "./data";

export class ArticleService {
  articles: IArticle[] = news;

  getArticle(articleId): IArticle {
    let result;
    this.articles.forEach(article => {
      if (article.id === articleId) result = article;
    });
    return result;
  }

  getArticles(): IArticle[] {
    return this.articles;
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
