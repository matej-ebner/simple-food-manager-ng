import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (
            localStorage.getItem('simple-food-manager-token') !== null
        ) {
            const copiedReq = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    'Bearer ' + localStorage.getItem('simple-food-manager-token')
                )
            });
            return next.handle(copiedReq);
        } else {
            return next.handle(req);
        }
    }
}
