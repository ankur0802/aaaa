
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from '../reducers/initial.state';
export const USER_STATE_NAME = 'user';

const getUserData = createFeatureSelector<SharedState>(USER_STATE_NAME);

export const getdata = createSelector(getUserData, (state) => {
  return state.data;
});

export const getmessage = createSelector(getUserData, (state) => {
  return state.message;
});
