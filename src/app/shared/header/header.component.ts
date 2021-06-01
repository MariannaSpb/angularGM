import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserInstance } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  @Input() isAuthenticated: boolean;
  user: UserInstance;
 constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
    const token = localStorage.getItem('token');

    //does not work :(
    if (token) {
      this.user = this.authService.getUserInfo(token); 
      return this.user
    }
  }



logout() {
 this.authService.logout();
 this.router.navigateByUrl('login-page');
}

}
