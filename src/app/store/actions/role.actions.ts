import {createAction ,props} from '@ngrx/store'
import {  roleResponse } from 'src/app/data-types/dataTypes';



export const allRoles = createAction('allRoles', props<{roledata:roleResponse}>());

