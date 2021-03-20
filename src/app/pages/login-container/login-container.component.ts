import { Component, } from "@angular/core";

import { PageTitleService } from "src/app/services/page-title.service";

@Component({
  selector: "sfm-login-container",
  templateUrl: "./login-container.component.html",
  styleUrls: ["./login-container.component.scss"],
})
export class LoginContainerComponent  {

  constructor(
    private pageTitleService: PageTitleService
  ) {
    this.pageTitleService.setTitleAddOnString("login");

    console.log('aaaa');
  }

}
