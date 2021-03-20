import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesTableModule } from "src/app/components/articles-table/articles-table.module";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";

import { DashboardContainerComponent } from "./dashboard-container.component";

import { DashboardContainerService } from "./dashboard-container.service";

const routes: Routes = [{ path: "", component: DashboardContainerComponent }];

@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [SharedModule, RouterModule.forChild(routes), ArticlesTableModule],
  providers: [DashboardContainerService],
})
export class DashboardContainerModule {}
