import { snackbarReducer, initialState } from './snackbar.reducer';

describe('Snackbar Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = snackbarReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
