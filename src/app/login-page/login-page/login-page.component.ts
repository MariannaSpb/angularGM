import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login: string = "";
  public password: string = "";

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitButtonClick() {
    if(this.login.length > 0 && this.password.length > 0) {
      console.log('Logged in successfully');
      this.authService.login({
        login: this.login,
        password: this.password,
      });
    }
    else {
      console.log("Please, fill the form")
    }
  }

}
