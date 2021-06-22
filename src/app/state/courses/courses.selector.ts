import { createSelector } from '@ngrx/store';
import { State } from '..';

export const selectFeature = (state: State) => state;

export const selectCourses = createSelector(
  selectFeature,
  (state: State) => state.courses
);
