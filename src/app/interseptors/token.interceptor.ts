import { Injectable } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userDataService: UserDataService, private loaderService: LoaderService){}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        this.loaderService.addLoader();
        if (!request.url.includes('http://localhost:3004/auth/login')) {
            request = request.clone({
                setHeaders: {
                    Authorization:  this.userDataService.getUserData().token,
                }
            });
        }

        setTimeout(() => this.loaderService.hideLoader(), 500);
        return next.handle(request);
    }
}
