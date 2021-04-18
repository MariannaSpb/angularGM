import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseModule } from '../course/course.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CourseModule,
    SharedModule
  ],
  exports: [ MainPageComponent],
})
export class MainPageModule { }
