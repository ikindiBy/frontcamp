import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article-page",
  templateUrl: "./article-page.component.html",
  styleUrls: ["./article-page.component.css"]
})
export class ArticlePageComponent implements OnInit {
  public articleNumber: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleNumber = this.route.snapshot.params["id"];
  }
}
