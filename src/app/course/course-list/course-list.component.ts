import { Component } from '@angular/core';
import { COURSES } from '../mock-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent  {
  courseList = COURSES;


  public onDeleteCourse(item): void {
    console.log('this course was delete:', item.id)
  }

  public onEditCourse(item): void {
    console.log('this course was edite:', item.id)
  }

  public trackByFn(index: number): number {
    return index;
  }

}
