import { userData} from '../actions/kiteuser.actions';
import { createReducer, on } from '@ngrx/store';
import { kiteInitialState } from './initial.state';

const _kiteuserReducer = createReducer(
    kiteInitialState,
  on(userData, (state, action) => {
    return {
      ...state,
      userdata: action.userdata,
 
    };
  }),
);

export function kiteuserReducer(state:any, action:any) {
  return _kiteuserReducer(state, action);
}