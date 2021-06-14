import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CourseService } from 'src/app/course/course.service';
import { Course } from 'src/app/models/data-model';
import { LoaderService } from 'src/app/services/loader.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [FilterPipe]
})
export class MainPageComponent implements OnInit {
  @Input() isAuthenticated;
  courseList: Course[];


  constructor(private router: Router, private courseService: CourseService, private loaderService: LoaderService) {}


  ngOnInit() {
   
  }

 
  // onLoadCourse(): void {
  //   this.loaderService.addLoader();
  //   this.courseService.getSomeCourses(0, 5).pipe( 
  //     map(value => {
  //       const arr = Object.values(value);
  //       console.log('ARR', arr);
  //       console.log('courseList', this.courseList);
  //       // arr.forEach((el) => {
  //       //   this.courseList.push(el);
  //       // })
  //       // this.loaderService.hideLoader();
  //     })
  //   ).subscribe()
  // }

  
  openAddCourse() {
    this.router.navigateByUrl('/courses/new');
  }

}
