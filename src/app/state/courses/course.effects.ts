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
        console.log('DATAA', data) //[]
        return getSomeCourses({ courses: data });
      }),
    )
  ))

  // withLatestFrom(this.store, (action, state) => ({ action, state })),
  // exhaustMap((data: any) => {
  //   console.log('LOADDD data', data)
  //   return this.courseService
  //     .getSomeCourses(0,  data.state.courses.courses.length + 5) // data.state.courses.courses.length + 5
  //     .pipe(
  //       map((courses: any) => {
  //         console.log('LOADDD', courses); // [] 5
  //         return getSomeCourses({ courses });
  //       })
  //     );
  //   })
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
        //catchError((error) => of(getDeliveryModeError(error)))
      )
    ))
  )
);

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<State>
    ) {}

}
