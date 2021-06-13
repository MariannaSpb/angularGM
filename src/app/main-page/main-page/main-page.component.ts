import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CourseService } from 'src/app/course/course.service';
import { Course } from 'src/app/models/data-model';
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
  constructor(private router: Router, private courseService: CourseService) {}


  ngOnInit() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courseList = data;
      console.log('inition list', this.courseList)
      return this.courseList;
    });
    
  }


  onLoadCourse(): void {
    this.courseService.getSomeCourses(0, 5).pipe(
      map(value => {
        const arr = Object.values(value);
        arr.forEach((el) => {
          this.courseList.push(el);
        })
      })
    ).subscribe()
  }

  
  

  deteleCourse(id: number) {
    const item = this.courseList.find(item => item.id == id);
    this.courseList.splice(this.courseList.indexOf(item), 1)
    this.courseService.removeCourse(item.id).subscribe(item => {
      return item;
    });
  }


  openAddCourse() {
    this.router.navigateByUrl('/courses/new');
  }

}
