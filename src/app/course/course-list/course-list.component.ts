import { Component } from '@angular/core';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseInstance } from '../course';
import { COURSES } from '../mock-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe]
})
export class CourseListComponent {
  courseList = COURSES;

  constructor(private filter: FilterPipe) {}

  public onDeleteCourse(item): void {
    console.log('this course was delete:', item.id)
  }

  public onEditCourse(item): void {
    console.log('this course was edite:', item.id)
  }

  public trackByFn(index: number): number {
    return index;
  }

  onFilterCourses(event) {
    this.courseList = this.filter.transform(this.courseList, event);
  }


}
