import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared-modules/shared/shared.module";
import { MenuModule } from "./components/menu/menu.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorModule } from "./components/error/error.module";
import { HttpErrorInterceptor } from "./http-interceptors/http-error.interceptor";
import { HttpConfigInterceptor } from "./http-interceptors/httpconfig.interceptor";
import { TokenInterceptor } from "./http-interceptors/token.interceptor";
import { SpinnerModule } from "./components/spinner/spinner.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MenuModule,
    SpinnerModule,
    ErrorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
