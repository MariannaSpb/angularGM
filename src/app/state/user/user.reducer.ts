import { createReducer, on, Action } from '@ngrx/store';
import { getCurrentUser, userLogout, getToken } from './user.actions';

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
  on(getToken, (state, { token }) => {
    console.log(token);
    return {
      ...state,
      token,
    };
  })
);

export function userReducer(state, action: Action) {
  return reducer(state, action);
}
