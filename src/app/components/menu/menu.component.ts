import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { NavigationRoutes } from "src/app/app-navigation-constants";
@Component({
  selector: "sfm-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  navigationRoutes = NavigationRoutes;

  constructor(public authService: AuthService, public router: Router) {}
}
