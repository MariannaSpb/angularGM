import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '..';

import { getToken, getCurrentUser } from './user.actions';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class UserEffect {
  getUser = createEffect(() =>
    this.actions$.pipe(
      ofType(getToken),
      withLatestFrom(this.store, (action, state) => ({ action, state })),
      exhaustMap((data: any) => {
        console.log('DATA USER', data)
        console.log(data.action.token);
        return this.authService.getUserInfo(data.action.token.token).pipe(
          tap((user: any) => {
            return getCurrentUser({ user });
          })
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<State>
  ) {}
}
