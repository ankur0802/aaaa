import { Injectable } from '@angular/core';
import { login, loginResponse } from 'src/app/data-types/dataTypes';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import  {endPoints} from '../../../constants/apiEndpoints/endPoints'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiURL


  constructor(private http: HttpClient, private route:Router ) { }

  userLogin(data:login){
   return this.http.post<loginResponse>(`${endPoints.LOGIN}`, data ,  {headers: new HttpHeaders().set('Content-Type', "application/json")})
  }

  

}
