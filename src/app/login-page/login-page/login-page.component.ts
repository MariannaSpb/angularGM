import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login: string = "";
  public password: string = "";

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated();
  }

  onSubmitButtonClick() {
    if(this.login.length > 0 && this.password.length > 0) {
      this.authService.login({
        login: this.login,
        password: this.password,
      });
        console.log('Logged in successfully');
      const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/courses';
          this.router.navigate([redirect]);
    }
    else {
      console.log("Please, fill the form")
    }
  }

}
