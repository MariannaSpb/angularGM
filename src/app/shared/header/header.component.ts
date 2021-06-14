import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/data-model';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { UserInstance } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() isAuthenticated: boolean;
  user;
  isSignOutBtnVisible = false;

 constructor(private authService: AuthService, private router: Router, private userDataService: UserDataService){}

  ngOnInit() {
    const userData = this.userDataService.getUserData();

    this.authService.subscribeOnLogin(() => {
      this.isSignOutBtnVisible = true;
      this.isAuthenticated = true;
    })

    if (userData) {
      this.authService.getUserInfo(userData).subscribe(person => {
        this.user = person;
      })
    }
  }



logout() {
  this.router.navigateByUrl('login-page');
  this.authService.logout();

}


ngOnChanges(changes: SimpleChanges) {
  this.isAuthenticated = changes.isAuthenticated.currentValue;
}

}
