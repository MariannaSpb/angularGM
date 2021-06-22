import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  export class UserDataService {
    private readonly varName = 'token';

    getUserData() {
      return JSON.parse(localStorage.getItem(this.varName));
    }
  
    setUserData(userData) {
      localStorage.setItem(this.varName, userData);
    }
  
  }