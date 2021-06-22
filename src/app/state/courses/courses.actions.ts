import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/data-model';

export const getCoursesSuccess = createAction(
    'Get Courses Success',
    props<{courses: Course[]}>(), 
);

export const getSomeCourses = createAction(
    'Get Some Courses',
    props<{courses: Course[]}>(),
);

export const getCourses = createAction(
    'Get Courses',
);

export const getAllCourses = createAction(
    'Get All Courses',
);

export const removeCourse = createAction(
    'Remove Courses',
);


export const loadMoreCourses = createAction(
    'More Courses',
);

export const editCourse = createAction(
    'Edit Course',
    props<{ currentId: number }>(),
);

export const currentCourse = createAction(
    'Current Course',
    props<{ currentCourse: Course }>(),
);
