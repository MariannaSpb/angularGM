import { createReducer, on, Action } from '@ngrx/store';
import { currentCourse, editCourse, getCoursesSuccess, getSomeCourses, removeCourse, removeCourseSuccess } from './courses.actions';

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
    let updatedCourse = state.allCourses.concat(courses);
    return {
      ...state,
      // courses,
      allCourses: updatedCourse,
    };
  }),
  on(editCourse, (state, { currentId }) => {
    return {
      ...state,
      currentId,
    };
  }),

  on(currentCourse, (state, { currentCourse }) => {
    return {
      ...state,
      currentCourse,
    };
  }),
  on(removeCourseSuccess, (state, { courseId }) => {
    let updatedCourse = state.allCourses.filter(x => x.id !== courseId);
    return {
      ...state,
      allCourses: updatedCourse,
    };
  }),
);

export function coursesReducer(state: any, action: Action): any {
  return reducer(state, action);
}
