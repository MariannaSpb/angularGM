import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/data-model';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { State } from 'src/app/state';
import { getCurrentUser, userLogout } from 'src/app/state/user/user.actions';
import { selectUser } from 'src/app/state/user/user.selector';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  // @Input() isAuthenticated: boolean;
  user;
  isSignOutBtnVisible = false;
  unsubscribe: Subscription;

  token;

 constructor(private store: Store<State>,
             private authService: AuthService,
             private router: Router, private userDataService: UserDataService){}

  ngOnInit() {
    const userData = this.userDataService.getUserData();
    this.authService.subscribeOnLogin(() => {
      this.isSignOutBtnVisible = true;
    });
    console.log('isSignOutBtnVisible', this.isSignOutBtnVisible); //false
    if (userData) {
      //console.log('userData VALUE', userData.token)
      //console.log('isSignOutBtnVisible', this.isSignOutBtnVisible); //false

      // NEW если токен есть то  через селект получить юзера
      // this.store.pipe(
      // select(selectUser))
      // .subscribe(user => {
      //   this.user = user;
      //   console.log('USER', this.user);
      // });

      // ----- OLD
      this.authService.getUserInfo(userData).subscribe(person => { // верни
        this.user = person;
        this.store.dispatch(getCurrentUser({user: person})); // сетим юзера
        //console.log('USER', this.user); //USER { id, token..}
      });

      // console.log('USER', this.user); // undef
    }
  }

  ngOnChanges() {
    console.log('USER', this.user);
    console.log('isSignOutBtnVisible', this.isSignOutBtnVisible);
  }

logout() {
  this.router.navigateByUrl('login-page');
  this.authService.logout();
  this.store.dispatch(userLogout());
}

}
