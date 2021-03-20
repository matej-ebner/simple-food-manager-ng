import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";

import { SpinnerComponent } from "./spinner.component";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [SharedModule],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
