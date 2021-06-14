import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Course, LoginRequest, TokenRequest, User } from '../models/data-model';
import { IUser } from '../user';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser;
  isAuth: boolean = false;
  redirectUrl: string;
  onLoginCb;
  
  authUrl = 'http://localhost:3004/auth';

  constructor(private userDataService: UserDataService, private http: HttpClient) { }
  
  login(credentials: LoginRequest) {

    return this.http.post<Observable<TokenRequest>>(`${this.authUrl}/login`, credentials)
      .pipe(
        tap((item: any) => {
          //console.log("item:", item) //{token: "58ebfdf7f1f558c5c86e17f6"}
          this.isAuth = true;
          this.onLoginCb();
          return this.userDataService.setUserData(JSON.stringify(item));
        })
      );
  }

  // "login": "flastname",
  // "password": "flastname"

  logout() {
    localStorage.removeItem('token');
    this.isAuth = false;
  }
  isAuthenticated() {
  return this.isAuth;
  }

  getUserInfo(token) {
    return this.http.post<User>(`${this.authUrl}/userinfo`, token).pipe(
      tap((item) => {
        return item;
      })
    )
  }

  subscribeOnLogin(onLoginCb) {
    this.onLoginCb = onLoginCb;
  }

}


