import {createAction ,props} from '@ngrx/store'
import { loginResponse, userData } from 'src/app/data-types/dataTypes';



export const userlogin = createAction('userlogin', props<{userdata:loginResponse}>());

export const userlist = createAction('userlist', props<{userlistdata:userData[]}>());

export const myDetail = createAction('myDetail', props<{myDetail:userData}>());
