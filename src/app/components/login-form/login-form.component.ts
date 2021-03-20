import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Dictionary } from "src/app/enums/dictionary.enum";

import { FormsService } from "src/app/services/forms.service";
import { AuthService } from "src/app/services/auth.service";
import { LoginDTO } from "src/app/interfaces/login-dto.interface";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
  selector: "sfm-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  dictionary = Dictionary;

  loginForm: FormGroup;
  invalidCredentials = false;
  loginSubscription: Subscription;

  constructor(
    public formsService: FormsService,
    private spinnerService: SpinnerService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup({
      identifier: new FormControl("uniqcaster", [
        Validators.required,
        this.formsService.noEmptySpaceValidator,
      ]),
      password: new FormControl("cast457", [
        Validators.required,
        this.formsService.noEmptySpaceValidator,
      ]),
    });
  }

  login(): void {
    this.spinnerService.showSpinner = true;
    const formData = this.loginForm.value;

    this.loginSubscription = this.authService.loginRequest(formData).subscribe(
      (response: LoginDTO) => {
        this.router.navigate(["/"]);
        this.spinnerService.showSpinner = false;
      },
      (error) => {
        if (error.status === this.dictionary.STATUS_403) {
          this.invalidCredentials = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
