import { Router, CanLoad } from "@angular/router";
import { Injectable } from "@angular/core";

import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad() {
    if (!this.authService.user) {
      this.router.navigate(["/"]);
    } else {
      return true;
    }
  }
}
