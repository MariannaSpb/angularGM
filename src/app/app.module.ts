import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainPageModule } from './main-page/main-page.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageModule } from './login-page/login-page.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    MainPageModule,
    CourseModule,
    BrowserAnimationsModule,
    LoginPageModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
