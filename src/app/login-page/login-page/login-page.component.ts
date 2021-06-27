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
    // this.store.pipe(select(selectUser)).subscribe(item => {
    //   console.log('ngOnInit', item);
    //   this.userToken = item;
    // });
    // console.log('userToken', this.userToken);
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
        // console.log('onSubmitButtonClick', data); // { token: "58ebfdf7f1f558c5c86e17f6" }
        this.router.navigateByUrl('/courses');
        console.log('Logged in successfully');
        this.store.dispatch(setToken(data));

        // new
        // this.store.dispatch(userLogin({credentials})) // сетим токен
       // set user 
      // this.store.dispatch(setUser(data)) //user?
      },
      (error) => console.error('ERROR', error.error));

  }

}
