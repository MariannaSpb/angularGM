import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/data-model';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { State } from 'src/app/state';
import { getCurrentUser, userLogout } from 'src/app/state/user/user.actions';
import { selectToken, selectUser } from 'src/app/state/user/user.selector';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user;
  isSignOutBtnVisible = false;
  tokenValueSubscription: Subscription;

  token;

 constructor(private store: Store<State>,
             private authService: AuthService,
             private router: Router, private userDataService: UserDataService){}

  ngOnInit() {
    // 1 получить токен из стора
   const tokenValueSubscription = this.store.pipe(
      select(selectToken))
      .subscribe(token => {
        this.token = token;
        console.log('TOKEN', this.token);

      });

   const userValueSubscription = this.store.pipe(
    select(selectUser))
    .subscribe(user => {
      this.user = user;
      console.log('USER HEADER', this.user);
    });

   this.authService.subscribeOnLogin(() => {
      this.isSignOutBtnVisible = true;
    });
   tokenValueSubscription.add(userValueSubscription);
  }

  logout() {
    this.router.navigateByUrl('login-page');
    this.authService.logout();
    this.store.dispatch(userLogout());
  }


  ngOnDestroy() {
    this.tokenValueSubscription.unsubscribe();
  }

}
