import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { UserInstance } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  user;
  isSignOutBtnVisible = false;

 constructor(private authService: AuthService, private router: Router, private userDataService: UserDataService){}

  ngOnInit() {
    const userData = this.userDataService.getUserData();

    this.authService.subscribeOnLogin(() => {
      this.isSignOutBtnVisible = true; 
    })

    if (userData) {
      this.user = userData;
      // console.log("User", this.user)
      return this.user
    }
  }



logout() {
 this.authService.logout();
 this.router.navigateByUrl('login-page');
}

}
