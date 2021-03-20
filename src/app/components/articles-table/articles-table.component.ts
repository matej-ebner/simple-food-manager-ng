import { Component, Input } from "@angular/core";
import { ArticleDTO } from "src/app/interfaces/article-dto.interface";

@Component({
  selector: "sfm-articles-table",
  templateUrl: "./articles-table.component.html",
  styleUrls: ["./articles-table.component.scss"],
})
export class ArticlesTableComponent {
  @Input() articles: ArticleDTO[];

  constructor() {}
}
