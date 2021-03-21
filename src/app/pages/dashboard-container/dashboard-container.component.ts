import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleDTO } from "src/app/interfaces/article-dto.interface";

import { PageTitleService } from "src/app/services/page-title.service";

@Component({
  selector: "sfm-dashboard-container",
  templateUrl: "./dashboard-container.component.html",
  styleUrls: ["./dashboard-container.component.scss"],
})
export class DashboardContainerComponent {
  articlesListObservable$: Observable<ArticleDTO[]>;

  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.setTitleAddOnString("Dashboard");
  }
}
