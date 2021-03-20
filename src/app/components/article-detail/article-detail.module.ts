import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ModalModule } from "../modal/modal.module";
import { ArticleDetailComponent } from "./article-detail.component";

@NgModule({
  declarations: [ArticleDetailComponent],
  imports: [SharedModule, ModalModule],
  exports: [ArticleDetailComponent],
})
export class ArticleDetailModule {}
