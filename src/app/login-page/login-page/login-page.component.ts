import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { State } from 'src/app/state';
import { selectUser } from 'src/app/state/user/user.selector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login = '';
  public password = '';

  constructor(private store: Store<State>, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {   
    this.store.pipe(select(selectUser)).subscribe(item => {
      console.log('ngOnInit', item);
    })
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
