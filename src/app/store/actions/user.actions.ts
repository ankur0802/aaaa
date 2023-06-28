import {createAction ,props} from '@ngrx/store'
import { loginfailResponse, loginResponse, userData } from 'src/app/data-types/dataTypes';



export const userlogin = createAction('userlogin', props<{userdata:loginResponse}>());
export const userloginfail = createAction('userloginfail', props<{userdata:loginfailResponse}>());

export const userlist = createAction('userlist', props<{userlistdata:userData[]}>());
export const userlistfail = createAction('userlistfail', props<{userlistdata:loginfailResponse}>());

export const myDetail = createAction('myDetail', props<{myDetail:userData}>());
