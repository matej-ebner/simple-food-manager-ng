import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SpinnerService } from "./spinner.service";

@Injectable({
  providedIn: "root",
})
export class ErrorsService {
  errorCode: number;

  constructor(private router: Router, private spinnerService: SpinnerService) {}

  handleError(error) {
    this.errorCode = error.status;
    this.spinnerService.showSpinner = false;

    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 2000);
  }
}
