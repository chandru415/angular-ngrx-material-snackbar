import { createAction, props } from '@ngrx/store';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

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



/** This is the example action - to trigger snackbar from effect
 *  not related to the main confirguration
 */
export const OpenSnackbarsFromEffect = createAction(
  '[Snackbar] Open Snackbars From Effect',
  props<{
    config: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    };
  }>()
);
 /** End of example action */
