import { IArticle } from "./IArticle";
import { news } from "./data";

export class ArticleService {
  articles: IArticle[] = news;

  getArticles(): IArticle[] {
    return this.articles;
  }

  crateArticle(article: IArticle) {}

  readMore(article: IArticle) {
    console.log(article);
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
      const editedArticle: any = {
        id: Date.now(),
        heading: article.heading,
        content: article.content,
        description: article.description || "",
        author: article.author || "no name",
        date: article.date || ""
      };

      this.articles.push(editedArticle);
    }
  }

  deleteArticle(article: IArticle) {
    let indexOfArticle = this.articles.indexOf(article);
    if (indexOfArticle > -1) {
      this.articles.splice(indexOfArticle, 1);
    }
  }
}
