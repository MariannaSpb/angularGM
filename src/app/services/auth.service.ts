import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginRequest, TokenRequest, User } from '../models/data-model';
import { State } from '../state';
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

  private isAuthenticated = new BehaviorSubject(false);
  isAuthenticatedSubscriber = this.isAuthenticated.asObservable(); 

  constructor(private store: Store<State>, private userDataService: UserDataService, private http: HttpClient) { }

  login(credentials: LoginRequest) {
    return this.http.post<Observable<TokenRequest>>(`${this.authUrl}/login`, credentials)
      .pipe(
        tap((item: any) => {
          this.isAuth = true;
          this.isAuthenticated.next(true)
          this.onLoginCb();
          //this.store.dispatch(getToken({token: item}));
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

  getUserInfo(token) { // {token: '34234243'}
    return this.http.post<User>(`${this.authUrl}/userinfo`, token).pipe(
      tap((item) => {
        return item;
      })
    );
  }

  subscribeOnLogin(onLoginCb) {
    this.onLoginCb = onLoginCb;
  }

}


