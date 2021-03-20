import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ArticleDetailModule } from "../article-detail/article-detail.module";
import { ArticlesTableComponent } from "./articles-table.component";

@NgModule({
  declarations: [ArticlesTableComponent],
  imports: [SharedModule, ArticleDetailModule],
  exports: [ArticlesTableComponent],
})
export class ArticlesTableModule {}
