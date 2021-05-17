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
  constructor(private authServise: AuthService){} //private cdRef: ChangeDetectorRef

  ngOnInit() {
    this.isAuthenticated = this.authServise.isAuthenticated();
    // this.cdRef.detectChanges();
  //  console.log('INIT APP', this.authServise.isAuthenticated())
  //  console.log('INIT APP isAuthenticated', this.isAuthenticated)
  }
}
