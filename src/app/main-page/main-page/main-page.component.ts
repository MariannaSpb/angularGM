import { Component, Input, OnInit } from '@angular/core';
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
  onLoadCourse(): void {
    console.log("Load more courses");
  }
  
  openAddCourse() {
    //open modal handler
  }

}
