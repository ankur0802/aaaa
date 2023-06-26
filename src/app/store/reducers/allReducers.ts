import { ActionReducerMap } from "@ngrx/store";
import { roleReducer } from "./role.reducers";
import { userReducer } from "./user.reducers";


interface AppState {
    user: any;
    role: any;
}


export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    role: roleReducer
  };
  