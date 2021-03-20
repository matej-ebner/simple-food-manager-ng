import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginFormModule } from "src/app/components/login-form/login-form.module";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";

import { LoginContainerComponent } from "./login-container.component";

import { LoginContainerService } from "./login-container.service";

const routes: Routes = [{ path: "", component: LoginContainerComponent }];

@NgModule({
  declarations: [LoginContainerComponent],
  imports: [SharedModule, RouterModule.forChild(routes), LoginFormModule],
  providers: [LoginContainerService],
})
export class LoginContainerModule {}
