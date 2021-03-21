import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleFormModule } from "src/app/components/article-form/article-form.module";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { NewArticleContainerComponent } from "./new-article-container.component";


import { NewArticleContainerService } from "./new-article-container.service";

const routes: Routes = [{ path: "", component: NewArticleContainerComponent }];

@NgModule({
  declarations: [NewArticleContainerComponent],
  imports: [SharedModule, RouterModule.forChild(routes), ArticleFormModule],
  providers: [NewArticleContainerService],
})
export class NewArticleContainerModule {}
