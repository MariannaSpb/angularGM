import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.url.includes('http://localhost:3004/auth/login')) {
            request = request.clone({
                setHeaders: {
                    Authorization: JSON.parse(localStorage.getItem('token')).token
                }
            });
        }
        return next.handle(request);
    }
}
