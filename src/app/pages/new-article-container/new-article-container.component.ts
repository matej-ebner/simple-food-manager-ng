import { Component } from "@angular/core";

import { PageTitleService } from "src/app/services/page-title.service";

@Component({
  selector: "sfm-new-article-container",
  templateUrl: "./new-article-container.component.html",
  styleUrls: ["./new-article-container.component.scss"],
})
export class NewArticleContainerComponent {
  constructor(
    private pageTitleService: PageTitleService
  ) {
    this.pageTitleService.setTitleAddOnString("New article");
  }
}
