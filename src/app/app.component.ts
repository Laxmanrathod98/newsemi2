import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd, Router, Event } from "@angular/router";
import { Observable, Subscription } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
    isLogin: boolean = false;
    defaultRoute: string = "/";
    route: string = "/login";
    routerEvents: Subscription;

    /**
     * checks whether the router is login or not
     */
    constructor(private router: Router) {
        this.routerEvents = this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.isLogin = event.url === this.route || event.url === this.defaultRoute;
            }
        });
    }

    /**
     * on destroy
     */
    ngOnDestroy(): void {
        this.routerEvents.unsubscribe();
    }
}
