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


  constructor(private http: HttpClient,  private store: Store<State>) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url).pipe(tap((courses: Course[]) => {
      return courses;
    }));
  }



  addCourse(item: Course) {
    return this.http.post<Course>(this.url, item);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  updateCourse(id: number, item: Course) {
    return this.http.patch<Course>(`${this.url}/${id}`, item);
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
