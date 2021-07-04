import { createSelector } from '@ngrx/store';
import { State } from '..';

export const selectFeature = (state: State) => state;

export const selectCourses = createSelector(
  selectFeature,
  (state: State) => state.courses
);

export const selectAllCourses = createSelector(
  selectFeature,
  (state: State) => state.courses.allCourses
);
