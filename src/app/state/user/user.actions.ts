import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/data-model';


export const getCurrentUser = createAction(
    'Get User Success',
    props<{ user: User }>(), // take it in header
);

export const userLogout = createAction( // logout method
    'User Logout',
);
 
// export const userLogin = createAction(
//     'User Login',
// );

export const getToken = createAction( // login method
    'Get Token',
    props<{ token: string }>(),
);
