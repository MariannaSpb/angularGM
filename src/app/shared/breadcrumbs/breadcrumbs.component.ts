import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInstance } from 'src/app/course/course';
import { CourseService } from 'src/app/course/course.service';
import { Course } from 'src/app/models/data-model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  currentCourse: Course; //CourseInstance;

  constructor(public coursesService: CourseService, private route: ActivatedRoute) { } 

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      const id = +data.get('id');
      // this.getCurrentCourse(id);
    });
  }

  getCurrentCourse(id: number): void {
    console.log("BR", id)
    this.coursesService.getCourseById(id).subscribe(course => {
      this.currentCourse = course
    })
    console.log("currentCourse", this.currentCourse)
  }

}
