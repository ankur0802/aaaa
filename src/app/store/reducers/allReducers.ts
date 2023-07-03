import { ActionReducerMap } from "@ngrx/store";
import { roleReducer } from "./role.reducers";
import { userReducer } from "./user.reducers";
import {   kiteuserReducer } from "./kiteuser.reducers";


interface AppState {
    user: any;
    role: any;
    kite:any
}


export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    role: roleReducer,
    kite: kiteuserReducer
  };
  