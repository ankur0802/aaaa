
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { roleState } from '../reducers/initial.state';
export const USER_STATE_NAME = 'role';

const getRoleData = createFeatureSelector<roleState>(USER_STATE_NAME);

export const getdata = createSelector(getRoleData, (state) => {
  return state.data;
});

