import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

const getStateFeature = createFeatureSelector<AppState>('state');

export const getState = createSelector(getStateFeature, (state) => {
  console.log('Counter Feature State:', state);
  return state; // 'state' pode ser undefined na primeira vez, por isso o '?.'
});
