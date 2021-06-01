import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInstance } from 'src/app/course/course';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [FilterPipe]
})
export class MainPageComponent {
  @Input() isAuthenticated;
  courseList: CourseInstance[];
  constructor(private router: Router) {}

  onLoadCourse(): void {
  }
  
  openAddCourse() {
    this.router.navigateByUrl('/courses/new');
  }

}
