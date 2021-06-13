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
      //console.log("userData", userData) //было логин пароль--стал {"token":"58ebfdf7f1f558c5c86e17f6"}
      localStorage.setItem(this.varName, userData);
    }
  
  }