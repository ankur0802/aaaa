import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class KiteService {

  constructor() { }

  getallUser(){
    let token = localStorage.getItem('auth_token')
    return axios.get('https://kiteapi.rudraserver.com/api/v1/cmp/user', {
      headers:{
        'x-auth-token':token
      }
    })
  }

}
