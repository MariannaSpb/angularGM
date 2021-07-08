import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CourseService } from 'src/app/course/course.service';
import { Store } from '@ngrx/store';
import { State } from '..';
import { currentCourse, editCourse, getAllCourses, getCoursesSuccess, getSomeCourses, loadMoreCoursesSuccess, removeCourse, removeCourseSuccess} from './courses.actions';


@Injectable()
export class CourseEffects {
getAllCourses = createEffect(() =>
  this.actions$.pipe(
    ofType(getAllCourses),
    switchMap((action) => (
      this.courseService.getAllCourses().pipe(
        map((courses: any) => {
          return getCoursesSuccess({ courses });
        }),
      )
    ))
  )
);

loadMoreCourse = createEffect(() =>
this.actions$.pipe(
  ofType(loadMoreCoursesSuccess),
  switchMap((action) => (
    this.courseService.getSomeCourses(0, 5).pipe(
      map((data: any) => {
        return getSomeCourses({ courses: data });
      }),
    )
  ))
  )
);

removeCourse = createEffect(() =>
  this.actions$.pipe(
    ofType(removeCourse),
    switchMap((action) => (
      this.courseService.removeCourse(action.courseId).pipe(
        map((data: any) => {
          return removeCourseSuccess({ courseId: action.courseId })
        }),
      )
    ))
  )
);

editCourse = createEffect(() =>
this.actions$.pipe(
  ofType(editCourse),
  withLatestFrom(this.store, (action, state) => ({ action, state })),
  exhaustMap((data: any) => {
    console.log(data);
    const id = data.action.currentId;
    return this.courseService.getCourseById(id).pipe(
      map((course: any) => {
        return currentCourse({ currentCourse: course });
      })
    );
  })
)
);

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<State>
    ) {}

}
