import { Component, Input } from "@angular/core";

import { ArticleDTO } from "src/app/interfaces/article-dto.interface";

@Component({
  selector: "sfm-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.scss"],
})
export class ArticleDetailComponent  {
  @Input() article: ArticleDTO;

  constructor() {}

}
