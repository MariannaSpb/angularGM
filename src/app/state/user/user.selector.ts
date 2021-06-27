import { createSelector } from '@ngrx/store';
import { State } from '..';

export const selectFeature = (state: State) => state;

export const selectUser = createSelector(
  selectFeature,
  (state: State) => state.user
);

export const selectToken = createSelector(
  selectFeature,
  (state: State) => state.user.token
);
