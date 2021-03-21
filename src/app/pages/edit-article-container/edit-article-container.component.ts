import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ArticleDTO } from "src/app/interfaces/article-dto.interface";
import { ArticleService } from "src/app/services/article.service";

import { PageTitleService } from "src/app/services/page-title.service";

@Component({
  selector: "sfm-edit-article-container",
  templateUrl: "./edit-article-container.component.html",
  styleUrls: ["./edit-article-container.component.scss"],
})
export class EditArticleContainerComponent implements OnInit {
  getArticleObservable$: Observable<ArticleDTO>;

  constructor(
    private pageTitleService: PageTitleService,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.pageTitleService.setTitleAddOnString("Edit");
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.getArticle(id);
  }

  getArticle(id: number): void {
    this.getArticleObservable$ = this.articleService.getArticleRequest(id);
  }
}
