import { createAction, props } from '@ngrx/store';
import { MatSnackBarConfig } from '@angular/material';

export const OpenSnackbars = createAction(
  '[Snackbar] Open Snackbars',
  props<{
    config: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    };
  }>()
);

export const CloseSnackbars = createAction('[Snackbar] Close Snackbars');
