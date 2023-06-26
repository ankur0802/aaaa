import { allRoles } from '../actions/role.actions';
import { createReducer, on } from '@ngrx/store';
import { roleInitialState } from './initial.state';

const _roleReducer = createReducer(
    roleInitialState,
  on(allRoles, (state, action) => {
    return {
      ...state,
      data: action.roledata.role,
      success:action.roledata.success
      
    };
  }),
 
 
);

export function roleReducer(state:any, action:any) {
  return _roleReducer(state, action);
}