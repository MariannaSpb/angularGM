import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'video-portal';
  isAuthenticated;
  isLoading = false;
  constructor(private cdRef: ChangeDetectorRef, private authService: AuthService, private loaderService: LoaderService){} //private cdRef: ChangeDetectorRef

  ngOnInit() {
    //this.isAuthenticated = this.authService.isAuthenticated();

  }


  ngAfterViewChecked() {
    this.loaderService.isLoadingSubscriber.subscribe((item: boolean) => {
      this.isLoading = item;
    });
  }

}
