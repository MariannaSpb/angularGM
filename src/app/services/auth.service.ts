import { Injectable } from '@angular/core';
import { IUser } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser;
  isAuth: boolean = true;

  login(user) {
    return localStorage.setItem('token', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated() {
    console.log('isAuth', this.isAuth)
  return this.isAuth;
  }

  getUserInfo(user) {
    return user.login;
  }
}
