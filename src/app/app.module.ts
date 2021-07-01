import { AuthorState } from "./common-utilities/store/states/author.state";
import { DashboardModule } from "./dashboard/dashboard.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { HttpInterceptor, HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptorService } from "./login/services/token-interceptor.service";
import { CommonUtilitiesModule } from "./common-utilities/common-utilities.module";
import { LoginModule } from "./login/login.module";
import { UserState } from "./common-utilities/store/states/user.state";
import { CartState } from "./common-utilities/store/states/cart.state";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonUtilitiesModule,
        DashboardModule,
        NgxsModule.forRoot([AuthorState, UserState, CartState]),
        MatSidenavModule,
        MatIconModule,
        NgxsLoggerPluginModule.forRoot(),
        DashboardModule,
        HttpClientModule,
        CommonUtilitiesModule,
        LoginModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
