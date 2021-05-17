import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges { 
  @Input() isAuthenticated: boolean;
 constructor(private authService: AuthService){}

  ngOnInit() {
    console.log('INIT', this.isAuthenticated)
  }

ngOnChanges(changes: SimpleChanges) {
 console.log('ngOnChanges', this.isAuthenticated)
}

logout() {
 this.authService.logout();
 console.log('Logout');
}

}
