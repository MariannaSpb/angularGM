import { Injectable } from '@angular/core';
import { IUser } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser;
  isAuth: boolean = false;
  redirectUrl: string;

  login(user) {
    this.isAuth = true;
    return localStorage.setItem('token', JSON.stringify(user));
    
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
}
