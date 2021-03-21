import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationRoutes } from "src/app/app-navigation-constants";
import { AuthGuard } from "./guard/auth-guard.service";

const routes: Routes = [
  {
    path: NavigationRoutes.LOGIN,
    loadChildren: () =>
      import("./pages/login-container/login-container.module").then(
        (m) => m.LoginContainerModule
      ),
  },
  {
    path: NavigationRoutes.DASHBOARD,
    loadChildren: () =>
      import("./pages/dashboard-container/dashboard-container.module").then(
        (m) => m.DashboardContainerModule
      ),
      canLoad: [AuthGuard]
  },
  {
    path: NavigationRoutes.NEW_ARTICLE,
    loadChildren: () =>
      import("./pages/new-article-container/new-article-container.module").then(
        (m) => m.NewArticleContainerModule
      ),
      canLoad: [AuthGuard]
  },
  {
    path: NavigationRoutes.EDIT_ARTICLE + "/:id",
    loadChildren: () =>
      import(
        "./pages/edit-article-container/edit-article-container.module"
      ).then((m) => m.EditArticleContainerModule),
      canLoad: [AuthGuard]
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: "disabled",
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
