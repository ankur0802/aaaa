import {createAction ,props} from '@ngrx/store'
 



export const userData = createAction('userData', props<{userdata:any}>());

