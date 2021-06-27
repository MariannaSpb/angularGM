import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { State } from 'src/app/state';
import { userLogin, setToken, setUser } from 'src/app/state/user/user.actions';
import { selectUser } from 'src/app/state/user/user.selector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login = '';
  public password = '';
  public userToken;

  constructor(private store: Store<State>, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitButtonClick() {
    const credentials = {
      login: this.login,
      password: this.password,
    };
    this.authService.login({
      login: this.login,
      password: this.password,
    }).subscribe(
      (data) => {
        this.router.navigateByUrl('/courses');
        console.log('Logged in successfully');
        this.store.dispatch(userLogin({credentials})); // сетим токен
       // set user 
        this.store.dispatch(setUser(data));
      },
      (error) => console.error('ERROR', error.error));

  }

}
