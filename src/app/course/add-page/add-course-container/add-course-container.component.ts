import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Course, CourseModel } from 'src/app/models/data-model';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-add-course-container',
  templateUrl: './add-course-container.component.html',
  styleUrls: ['./add-course-container.component.scss']
})
export class AddCourseContainerComponent implements OnInit {
  course: Course;
  mode: string;
  title: string;
  newIndex;
  form: FormGroup;

  constructor(public coursesService: CourseService, private router: Router,  private route: ActivatedRoute) { 
    this.route.params.pipe(
      tap(data => {
        console.log("DATA", data)
        return data;
      })
    ).subscribe(data => {
      console.log("Subsc data", data);
      if (data.id) {
        this.mode = 'Edit';
        this.title = 'Edit course';
        return;
      }
      this.mode = 'Add';
      this.title = "Add new course"
    })
  } 

  ngOnInit(): void {
    this.createForm();
    this.createNewCourse();
  }



  createForm(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      duration: new FormControl(0),
      date: new FormControl(''),
      authors: new FormControl([]),
    })
  }

  createNewCourse() {
    this.newIndex = Math.floor(Math.random() * 5);
    this.course = new CourseModel(this.newIndex, "", false, new Date(), 0, '', []);
    this.form.controls.title.setValue(this.course.name);
    this.form.controls.description.setValue(this.course.description);
  }


  getCourseDetails(id: number): void {
    this.coursesService.getCourseById(id).subscribe(course => {
      this.course = course;
    })
  }


  onCancel() {
    this.router.navigateByUrl('/courses');
  }

  onSave() {
    this.coursesService.addCourse(this.course).subscribe(item => item);
    this.router.navigateByUrl('/courses');
  }

}
