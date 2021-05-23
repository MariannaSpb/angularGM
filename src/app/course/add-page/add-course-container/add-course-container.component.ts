import { Component, OnInit } from '@angular/core';
import { CourseInstance } from '../../course';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-add-course-container',
  templateUrl: './add-course-container.component.html',
  styleUrls: ['./add-course-container.component.scss']
})
export class AddCourseContainerComponent implements OnInit {
  course: CourseInstance;
  
  constructor(public coursesService: CourseService,) { } 

  ngOnInit(): void {
    this.createNewCourse();
  }

  createNewCourse() {
    this.coursesService.createCourse();
  }


  onCancel() {
    console.log('cancel')
  }

  onSave() {
    console.log('save')
  }

}
