import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ArticleDTO } from "src/app/interfaces/article-dto.interface";
import { ArticleService } from "src/app/services/article.service";

import { PageTitleService } from "src/app/services/page-title.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
  selector: "sfm-dashboard-container",
  templateUrl: "./dashboard-container.component.html",
  styleUrls: ["./dashboard-container.component.scss"],
})
export class DashboardContainerComponent implements OnInit {
  articlesListObservable$: Observable<ArticleDTO[]>;

  constructor(
    private pageTitleService: PageTitleService,
    private spinnerService: SpinnerService,
    private articleService: ArticleService
  ) {
    this.pageTitleService.setTitleAddOnString("Dashboard");
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.spinnerService.showSpinner = true;
    this.articlesListObservable$ = this.articleService
      .getArticlesRequest()
      .pipe(
        tap((response: ArticleDTO[]) => {
          this.spinnerService.showSpinner = false;
        })
      );
  }
}
