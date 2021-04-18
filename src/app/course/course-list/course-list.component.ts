import { Component, OnInit } from '@angular/core';
import { COURSES } from '../mock-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList = COURSES;

  ngOnInit(): void {
    console.log('OnInit')
  }


  public deleteCourse(item): void {
    console.log('this course was delete:', item.id)
  }

  public editCourse(item): void {
    console.log('this course was edite:', item.id)
  }

  public trackByFn(index: number): number {
    return index;
  }

}
