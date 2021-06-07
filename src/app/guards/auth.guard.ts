import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){}

  private checkLogin(url: string): boolean | UrlTree { 
    if (this.authService.isAuth) {
      return true; 
    }
   
     this.authService.redirectUrl = url;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log('CanActivate Guard is called');
      const { url } = state; 
      return this.checkLogin(url);
  }
  
}
