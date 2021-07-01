import { Injectable, Injector } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector) {}

    /**
     * adding token to http request
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem("token");
        if (token) {
            const tokenizedReq: HttpRequest<any> = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return next.handle(tokenizedReq);
        } else {
            return next.handle(req);
        }
    }
}
