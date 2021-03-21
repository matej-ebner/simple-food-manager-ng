import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ArticleDTO } from "src/app/interfaces/article-dto.interface";
import { ArticleService } from "src/app/services/article.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
  selector: "sfm-articles-table",
  templateUrl: "./articles-table.component.html",
  styleUrls: ["./articles-table.component.scss"],
})
export class ArticlesTableComponent {
  articlesListObservable$: Observable<ArticleDTO[]>;

  articles: ArticleDTO[] = [];

  constructor(
    private spinnerService: SpinnerService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.spinnerService.showSpinner = true;
    this.articlesListObservable$ = this.articleService
      .getArticlesRequest()
      .pipe(
        tap((response: ArticleDTO[]) => {
          this.articles = response;
          this.spinnerService.showSpinner = false;
        })
      );
  }
}
