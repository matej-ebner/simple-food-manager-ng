import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleFormModule } from "src/app/components/article-form/article-form.module";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";

import { EditArticleContainerComponent } from "./edit-article-container.component";

import { EditArticleContainerService } from "./edit-article-container.service";

const routes: Routes = [{ path: "", component: EditArticleContainerComponent }];

@NgModule({
  declarations: [EditArticleContainerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ArticleFormModule
  ],
  providers: [EditArticleContainerService],
})
export class EditArticleContainerModule {}
