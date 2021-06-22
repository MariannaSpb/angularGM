import { createReducer, on, Action } from '@ngrx/store';
import { currentCourse, editCourse, getCoursesSuccess, getSomeCourses, removeCourse } from './courses.actions';

export const initialState = {
  courses: [],
  allCourses: [],
  currentCourse: null,
  currentId: null,
};

const reducer = createReducer(
  initialState,
  on(getCoursesSuccess, (state, { courses }) => { 
    return {
      ...state,
      allCourses: courses,
    };
  }),
  on(getSomeCourses, (state, { courses }) => {
    return {
      ...state,
      courses,
    };
  }),
  on(editCourse, (state, { currentId }) => {
    return {
      ...state,
      currentId,
    };
  }),

  // on(removeCourse, (state, { currentId }) => {
  //   return {
  //     ...state,
  //     currentId,
  //   };
  // }),
  on(currentCourse, (state, { currentCourse }) => {
    return {
      ...state,
      currentCourse,
    };
  }),

);

export function coursesReducer(state: any, action: Action): any {
  return reducer(state, action);
}
