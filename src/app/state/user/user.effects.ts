import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map, withLatestFrom, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '..';
import { AuthService } from 'src/app/services/auth.service';
import { getCurrentUser, setToken, setUser, userLogin } from './user.actions';

@Injectable()
export class UserEffect {
  login = createEffect(() =>
    this.actions$.pipe(
      ofType(userLogin),
      switchMap((action) => (
       this.authService.login(action.credentials).pipe(
         map(data => {
           return setToken({token: data.token });
         })
       )
    ))
  )
);

getUser = createEffect(() =>
this.actions$.pipe(
  ofType(setUser),
  switchMap((action) => (
   this.authService.getUserInfo(action).pipe(
     map(data => { // user {}
       return getCurrentUser({user: data});
     })
   )
))
)
);

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<State>
  ) {}
}
