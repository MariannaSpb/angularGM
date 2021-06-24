import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CourseService } from 'src/app/course/course.service';
import { Store } from '@ngrx/store';
import { State } from '..';
import { currentCourse, editCourse, getCoursesSuccess, getSomeCourses, removeCourse, removeCourseSuccess} from './courses.actions';


@Injectable()
export class CourseEffects {
getAllCourses = createEffect(() =>
  this.actions$.pipe(
    ofType('Get All Courses'),
    switchMap((action) => (
      this.courseService.getAllCourses().pipe(
        map((courses: any) => {
          return getCoursesSuccess({ courses });
        }),
        //catchError((error) => of(getDeliveryModeError(error)))
      )
    ))
    // withLatestFrom(this.store, (action, state) => ({ action, state })),
    // exhaustMap((data: any) => {
    //   return this.courseService.getAllCourses().pipe(
    //     map((courses: any) => {
    //       return getCoursesSuccess({ courses });
    //     })
    //   );
    // })
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

    // withLatestFrom(this.store, (action, state) => ({ action, state })),
    // exhaustMap((data: any) => {
    //   return this.courseService
    //     .removeCourse(data.state.courses.id)
    //     .pipe(
    //       map((data: any) => {
    //         console.log('DELETE', data)
    //         return editCourse({ currentId: data })
    //       })
    //     );
    // })
  )
);

// removeCourse = createEffect(() =>
// this.actions$.pipe(
//   ofType('Remove Courses'),
//   withLatestFrom(this.store, (action, state) => ({ action, state })),
//   exhaustMap((data: any) => {
//     return this.courseService
//       .getSomeCourses(0, data.state.courses.courses.length)
//       .pipe(
//         map((courses: any) => {
//           return getSomeCourses({ courses });
//         })
//       );
//   })
// )
// );

loadMoreCourse = createEffect(() =>
this.actions$.pipe(
  ofType('More Courses'),
  withLatestFrom(this.store, (action, state) => ({ action, state })),
  exhaustMap((data: any) => {
    return this.courseService
      .getSomeCourses(0,  data.state.courses.courses.length + 5) // data.state.courses.courses.length + 5
      .pipe(
        map((courses: any) => {
          console.log('LOADDD', courses)
          return getSomeCourses({ courses });
        })
      );
  })
)
);

getCourses = createEffect(() =>
this.actions$.pipe(
  ofType('Get Courses'),
  withLatestFrom(this.store, (action, state) => ({ action, state })),
  exhaustMap((data: any) => {
    return this.courseService.getSomeCourses(0, 5).pipe(
      map((courses: any) => {
        return getSomeCourses({ courses });
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
