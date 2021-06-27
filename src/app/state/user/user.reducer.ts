import { createReducer, on, Action } from '@ngrx/store';
import { getCurrentUser, setToken, userLogout } from './user.actions';

export const initialState = {
  user: {
    id: null,
    fakeToken: null,
    name: null,
    login: null,
    password: null,
  },
  token: null,
};

const reducer = createReducer(
  initialState,
  on(getCurrentUser, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(userLogout, (state) => {
    return {
      ...initialState,
    };
  }),
  on(setToken, (state, { token }) => {
    return {
      ...state,
      token,
    };
  }),

);

export function userReducer(state, action: Action) {
  return reducer(state, action);
}


