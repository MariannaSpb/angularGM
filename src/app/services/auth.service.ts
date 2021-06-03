import { Injectable } from '@angular/core';
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
