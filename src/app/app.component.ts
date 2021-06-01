import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'video-portal';
  isAuthenticated;
  constructor(private authService: AuthService){} //private cdRef: ChangeDetectorRef

  ngOnInit() {
    this.authService.isAuthenticated();
  }
}
