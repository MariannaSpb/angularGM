import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [CourseListComponent, CourseItemComponent],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
