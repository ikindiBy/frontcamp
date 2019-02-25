import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchByName"
})
export class SearchByNamePipe implements PipeTransform {
  transform(articles: any, value: string = ""): any {
    return articles.filter(article => {
      console.log(article, value);
      return article.heading.toUpperCase().includes(value.toUpperCase());
    });
  }
}
