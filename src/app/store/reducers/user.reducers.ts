import { myDetail, userlist, userlogin , userloginfail, userlistfail} from '../actions/user.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './initial.state';

const _userReducer = createReducer(
  initialState,
  on(userlogin, (state, action) => {
    return {
      ...state,
      data: action.userdata.data,
      isAuthenticated: action.userdata.success,
      message: action.userdata.message
    };
  }),
  on(userloginfail, (state, action) => {
    return {
      ...state,
      isAuthenticated: action.userdata.success,
      message: action.userdata.message
    };
  }),
  on(userlist, (state, action) => {
    return {
      ...state,
      userList: action.userlistdata,
    };
  }),
  on(userlistfail, (state, action) => {
    return {
      ...state,
      isAuthenticated: action.userlistdata.success,
      message: action.userlistdata.message
    };
  }),
  on(myDetail, (state, action) => {
    return {
      ...state,
      myDetail: action.myDetail,
    };
  }),
);

export function userReducer(state:any, action:any) {
  return _userReducer(state, action);
}