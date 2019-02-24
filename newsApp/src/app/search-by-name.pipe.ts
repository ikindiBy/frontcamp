import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchByName"
})
export class SearchByNamePipe implements PipeTransform {
  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(articles: any, value: string = ""): any {
    return articles.filter(article => {
      return article.title.toUpperCase().includes(value.toUpperCase());
    });
  }
}
