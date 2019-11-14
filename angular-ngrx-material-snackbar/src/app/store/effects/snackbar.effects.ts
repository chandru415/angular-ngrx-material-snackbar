import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, delay } from 'rxjs/operators';

import * as SnackbarActions from '../actions/snackbar.actions';
import { MatSnackBar } from '@angular/material';
import { CloseSnackbars } from '../actions/snackbar.actions';
import { environment } from 'src/environments/environment';

@Injectable()
export class SnackbarEffects {
  closeSnackbars$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SnackbarActions.CloseSnackbars),
        tap(() => this.matSnackBar.dismiss())
      ),
    { dispatch: false }
  );

  showSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SnackbarActions.OpenSnackbars),
      map(action => action.config),
      tap(config =>
        this.matSnackBar.open(config.message, config.action, config.config)
      ),
      delay(environment.snackbarDelayTime),
      map(() => CloseSnackbars())
    )
  );

  constructor(private actions$: Actions, private matSnackBar: MatSnackBar) {}
}
