import {
  // ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Course, User } from '../models/data-model';
import { coursesReducer } from './courses/courses.reducer';
import { userReducer } from './user/user.reducer';


export interface State {
  courses: CourseState;
  user: UserState;
}

export const reducers: ActionReducerMap<State> = {
  courses: coursesReducer,
  user: userReducer,
};

export interface CourseState {
  courses: Course[];
  allCourses: Course[];
  currentCourse: Course;
  currentId: number;
}

export interface UserState {
  user: User;
  token: string;
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
