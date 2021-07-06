import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Course, CourseModel } from 'src/app/models/data-model';
import { CourseState, State } from 'src/app/state';
import { editCourse, getAllCourses } from 'src/app/state/courses/courses.actions';
import { selectCourses } from 'src/app/state/courses/courses.selector';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-add-course-container',
  templateUrl: './add-course-container.component.html',
  styleUrls: ['./add-course-container.component.scss']
})
export class AddCourseContainerComponent implements OnInit {
  course: Course;
  idCourse: number;
  mode: string;
  modeTitle;
  newIndex;
  form: FormGroup;
  date: string | Date;

  constructor( private store: Store<State>,
               public coursesService: CourseService,
               private router: Router,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute) {
    this.route.params.pipe(
      tap(data => {
        console.log('DATA', data); // {}
        return data;
      })
    ).subscribe(data => {
      if (data.id) {
        this.idCourse = data.id;
        this.mode = 'Edit';
        this.modeTitle = 'Edit course';
        return;
      }
      this.mode = 'Add';
      this.modeTitle = 'Add new course';
    });
  }

  ngOnInit(): void {
    this.createForm();
    if (this.mode === 'Edit') {
    this.getCourseItem();
    return;
    }
    // если это добавление курса
    this.createNewCourse();
  }


  getCourseItem() {
    this.store.dispatch(editCourse({currentId: this.idCourse}));
    this.store.pipe(
      select(selectCourses),
    ).subscribe((courses: CourseState) => {
      if (courses.currentCourse) {
        this.form.controls.name.setValue(courses.currentCourse.name);
        this.form.controls.description.setValue(courses.currentCourse.description); //
        this.form.controls.authors.setValue(courses.currentCourse.authors);
        this.date = new Date(courses.currentCourse.date);
        this.form.controls.date.setValue(this.date); // this.date
        this.form.controls.duration.setValue(courses.currentCourse.length);
      }
    });
  }



  createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(50),
      ])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(500)])],
      authors: [[]],
      date: [],
      duration: [],
    });
  }

  get description() {
    return this.form.get('description');
  }

  get name() {
    return this.form.get('name');
  }


  createNewCourse() {
    this.newIndex = Math.floor(Math.random() * 5);
    this.course = new CourseModel(this.newIndex, '', false, new Date(), 0, '', []);
    this.form.valueChanges.subscribe(item => {
      this.course = new CourseModel(this.newIndex, '', false, new Date(), 0, '', []);
      this.course.name = item.name;
      this.course.description = item.description;
      this.course.authors = item.authors;
      this.course.date = new Date(item.date);
      this.course.length = item.duration;
      });
  }


  getCourseDetails(id: number): void {
    this.coursesService.getCourseById(id).subscribe(course => {
      this.course = course;
    });
  }


  onCancel() {
    this.router.navigateByUrl('/courses');
  }

  onSave() {
    if (this.mode === 'Edit') {
      this.coursesService.updateCourse(this.idCourse, this.form.getRawValue()).subscribe(item => {
        return item;
      });
    } else if (this.mode === 'Add') {
      this.coursesService.addCourse(this.course).subscribe(item => {
        return item;
      });
    }
    this.router.navigateByUrl('/courses');
  }

}
