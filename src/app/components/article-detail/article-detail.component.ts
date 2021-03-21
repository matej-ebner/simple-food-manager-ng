import { Component, Inject, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { ArticleDTO } from "src/app/interfaces/article-dto.interface";
import { ArticleService } from "src/app/services/article.service";
import { SpinnerService } from "src/app/services/spinner.service";
import { ArticlesTableComponent } from "../articles-table/articles-table.component";

@Component({
  selector: "sfm-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.scss"],
})
export class ArticleDetailComponent implements OnDestroy {
  @Input() article: ArticleDTO;

  confirmArticleDeletion: boolean = false;

  deleteArticleSubscription: Subscription;

  constructor(
    private articleService: ArticleService,
    private spinnerService: SpinnerService,
    @Inject(ArticlesTableComponent)
    private articlesTableComponent: ArticlesTableComponent
  ) {}

  deleteModalAction(deletionConfirmed: boolean) {
    if (deletionConfirmed) {
      this.deleteArticle();
    } else {
      this.confirmArticleDeletion = false;
    }
  }

  private deleteArticle() {
    this.spinnerService.showSpinner = true;
    this.deleteArticleSubscription = this.articleService
      .deleteArticleRequest(this.article.id)
      .subscribe((response: ArticleDTO) => {
        this.confirmArticleDeletion = false;
        this.articlesTableComponent.getArticles();
      });
  }

  ngOnDestroy(): void {
    if (this.deleteArticleSubscription) {
      this.deleteArticleSubscription.unsubscribe();
    }
  }
}
