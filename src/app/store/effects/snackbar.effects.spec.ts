import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SnackbarEffects } from './snackbar.effects';

describe('SnackbarEffects', () => {
  let actions$: Observable<any>;
  let effects: SnackbarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SnackbarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SnackbarEffects>(SnackbarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
