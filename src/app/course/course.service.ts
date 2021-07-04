import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Course, CourseModel } from '../models/data-model'; 
import { State } from '../state';
import { getCoursesSuccess } from '../state/courses/courses.actions';
import { CourseInstance } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  course: CourseInstance;
  private url = 'http://localhost:3004/courses';
  // private errorUrl = 'http://localhost:3004/error'
//   private courses: CourseInstance [] = [
//     {
//         id: 1,
//         title: 'Video Course 1. Name tag',
//         duration: 100,
//         description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
//         date: new Date(6),
//         isRated: true,
//     },
//     {
//         id: 2,
//         title: 'Video Course 2. Name tag',
//         duration: 80,
//         description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
//         date: new Date(),
//         isRated: false,
//     },
//     {
//         id: 3,
//         title: 'Video Course 3. Name tag',
//         duration: 146,
//         description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
//         date: new Date(),
//         isRated: true,
//     },

// ];

  constructor(private http: HttpClient,  private store: Store<State>) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url).pipe(tap((courses: Course[]) => {
      // 4. запрос вернул массив курсов
      // 5 . сработал экшен success и его обработал редьюсер,
      // который вернул новый стейт и записал курсы в allCourses: courses,
      // this.store.dispatch(getCoursesSuccess({courses}));
      // console.log('courses', courses);
      return courses;
    }));
  }

  // createCourse(): void { // return
  //   this.course = new CourseModel(this.courses.length + 1, '', new Date(), 0, '', false);
  // }

  addCourse(item: Course) {
    return this.http.post<Course>(this.url, item);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  updateCourse(item: CourseInstance) {

  }

  removeCourse(id: number) {
    return this.http.delete<Course>(`${this.url}/${id}`);
  }

  searchCourse(query: string) {
    return this.http.get<Course[]>(this.url, {
      params: {
        textFragment: query,
      }
    });
  }


  getSomeCourses(start, count) {
    return this.http.get(this.url, {
      params: {
        start,
        count,
      }
    });
  }
}
