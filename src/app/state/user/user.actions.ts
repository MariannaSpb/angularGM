import { createAction, props } from '@ngrx/store';
import { LoginRequest, User } from 'src/app/models/data-model';


export const getCurrentUser = createAction(
    'Get User',
    props<{ user: User }>(), // take it in header
);
 
export const userLogin = createAction(
    'User Login',
    props<{credentials: LoginRequest}>(),
);

export const setToken = createAction(
    'Set Token',
    props<{token: string}>(),
);

export const setUser = createAction(
    'Set User',
    props<{token: string}>(),
);

export const userLogout = createAction(
    'User Logout',
);



// export const setToken = createAction( // login method 
//     'Set Token',
//     props<{ token: string }>(),
// );
