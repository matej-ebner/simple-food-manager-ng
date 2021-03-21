import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ArticleFormComponent } from "./article-form.component";

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [SharedModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
