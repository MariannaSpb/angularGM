import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseInstance } from '../../course';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-add-course-container',
  templateUrl: './add-course-container.component.html',
  styleUrls: ['./add-course-container.component.scss']
})
export class AddCourseContainerComponent implements OnInit {
  course: CourseInstance;
  constructor(public coursesService: CourseService, private router: Router,  private route: ActivatedRoute) { } 

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      const id = +data.get('id');
      this.getCourseDetails(id);
    });
    this.createNewCourse();
  }

  createNewCourse() {
    this.coursesService.createCourse();
  }


  getCourseDetails(id: number): void {
    this.course = this.coursesService.getCourseById(id);
  }


  onCancel() {
    this.router.navigateByUrl('/courses');
  }

  onSave() {
    this.router.navigateByUrl('/courses');
  }

}
