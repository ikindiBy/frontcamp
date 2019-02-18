import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticleItemComponent } from "./article-item/article-item.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterModule, Routes } from "@angular/router";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { HeaderLoginComponent } from "./header-login/header-login.component";
import { HeaderTitleComponent } from "./header-title/header-title.component";
import { HeaderSettingsComponent } from "./header-settings/header-settings.component";
import { FooterComponent } from "./footer/footer.component";
import { ListArticlesComponent } from "./list-articles/list-articles.component";
import { EditingArticleComponent } from "./editing-article/editing-article.component";
import { EditFormComponent } from "./edit-form/edit-form.component";

import { ArticleService } from "./shared/article.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CreateArticleComponent } from "./create-article/create-article.component";

const AppRoutes: Routes = [
  // { path: "", component: AppComponent },
  { path: "list", component: ListArticlesComponent },
  {
    path: "articlePage/:id",
    component: ArticlePageComponent
    // children: [{ path: "id", component: ArticlePageComponent }]
  },
  { path: "article/:id", component: ArticlePageComponent },
  { path: "create", component: CreateArticleComponent },
  { path: "edite/:id", component: EditingArticleComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    NavigationComponent,
    ArticlePageComponent,
    HeaderLoginComponent,
    HeaderTitleComponent,
    HeaderSettingsComponent,
    FooterComponent,
    ListArticlesComponent,
    EditingArticleComponent,
    EditFormComponent,
    NotFoundComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
