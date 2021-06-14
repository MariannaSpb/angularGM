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
    
  }

  onSubmitButtonClick() {
    this.authService.login({
      login: this.login,
      password: this.password,
    }).subscribe(
      () => {
        this.router.navigateByUrl('/courses');
        console.log('Logged in successfully');
      },
      (error) => console.error(error.error));
  }

}
