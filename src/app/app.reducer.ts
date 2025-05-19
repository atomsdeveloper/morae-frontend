import { createReducer, on } from '@ngrx/store';
import { state, reset } from './app.actions';
import { initialState } from './app.state';

export const AppReducer = createReducer(
  initialState,
  on(state, (state) => ({ ...state })),
  on(reset, () => initialState)
);
