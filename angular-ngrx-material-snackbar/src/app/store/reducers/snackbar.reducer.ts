import { Action, createReducer, on } from '@ngrx/store';
import * as SnackbarActions from '../actions/snackbar.actions';

export const snackbarFeatureKey = 'snackbar';
import * as fromRoot from '../../store/reducers';

export interface State extends fromRoot.State {
  snackbarState: SnackbarState;
}

export interface SnackbarState {
  show: boolean;
}

export const initialState: SnackbarState = {
  show: false
};

export const snackbarReducer = createReducer(
  initialState,

  on(SnackbarActions.OpenSnackbars, (state, action) => {
    return { ...state, show: true };
  }),

  on(SnackbarActions.CloseSnackbars, (state, action) => {
    return { ...state, show: false };
  })
);
