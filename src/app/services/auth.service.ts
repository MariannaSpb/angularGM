import { Injectable } from '@angular/core';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private readonly varName = 'token';

  getUserData() {
    return localStorage.getItem(this.varName);
  }

  setUserData(userData) {
    localStorage.setItem(this.varName, userData);
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser;
  isAuth: boolean = false;
  redirectUrl: string;
  onLoginCb;

  constructor(private userDataService: UserDataService) { }
  login(user) {
    this.isAuth = true;
    this.onLoginCb();
    return this.userDataService.setUserData(JSON.stringify(user));

  }

  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated() {
  return this.isAuth;
  }

  getUserInfo(user) {
    return user.login;
  }

  subscribeOnLogin(onLoginCb) {
    this.onLoginCb = onLoginCb;
  }
}
