import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SnackbarState } from 'src/app/store/reducers/snackbar.reducer';
import {
  OpenSnackbars,
  OpenSnackbarsFromEffect
} from 'src/app/store/actions/snackbar.actions';
import {
  snackbarSUCCESS,
  snackbarERROR,
  snackbarINFO
} from 'src/app/constants';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.scss']
})
export class SnackbarDemoComponent implements OnInit {
  copyright$: Observable<Date> = of(new Date());

  constructor(private sbStore: Store<SnackbarState>) {}

  ngOnInit() {}

  openSuccess(event: any) {
    this.sbStore.dispatch(
      OpenSnackbars({
        config: {
          message: 'You opened Success',
          action: 'Close',
          config: snackbarSUCCESS
        }
      })
    );
  }

  openInfo(event: any) {
    this.sbStore.dispatch(
      OpenSnackbars({
        config: {
          message: 'You opened Info',
          action: 'Close',
          config: snackbarINFO
        }
      })
    );
  }

  openError(event: any) {
    this.sbStore.dispatch(
      OpenSnackbars({
        config: {
          message: 'You opened Error',
          action: 'Close',
          config: snackbarERROR
        }
      })
    );
  }

  openEffect(event: any) {
    this.sbStore.dispatch(
      OpenSnackbarsFromEffect({
        config: {
          message: 'You opened Snackar from effect',
          action: 'Yep!',
          config: snackbarSUCCESS
        }
      })
    );
  }
}
