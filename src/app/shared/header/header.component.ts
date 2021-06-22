import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/data-model';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { State } from 'src/app/state';
import { getCurrentUser } from 'src/app/state/user/user.actions';
import { UserInstance } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input() isAuthenticated: boolean;
  user;
  isSignOutBtnVisible = false;

 constructor(private store: Store<State>,
             private authService: AuthService,
             private router: Router, private userDataService: UserDataService){}

  ngOnInit() {
    const userData = this.userDataService.getUserData();

    this.authService.subscribeOnLogin(() => {
      this.isSignOutBtnVisible = true; 
    })
    // this.authService.isAuthenticatedSubscriber.subscribe(data => {
    //   console.log('authh', data) //true
    // })

    if (userData) {
      this.authService.getUserInfo(userData).subscribe(person => {
        this.user = person;
        this.store.dispatch(getCurrentUser({user: person}));
      })
    }
  }



logout() {
  this.router.navigateByUrl('login-page');
  this.authService.logout();

}

}
