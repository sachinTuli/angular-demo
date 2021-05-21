import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { from } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class HttpTokenInterceptorService implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const headersConfig = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };

        let token = localStorage.getItem("token");

        if (token) {
            headersConfig["Authorization"] = `${token}`;
        }
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    }
}
