import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { endPoints } from 'src/app/constants/apiEndpoints/endPoints';
import { login, loginResponse, userData } from 'src/app/data-types/dataTypes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiURL

  constructor(private http: HttpClient, private route:Router ) { }

  userList(){
    return this.http.get<userData[]>(`${endPoints.GET_ALL_USER}`)
  }
 
userDetail(){
  return this.http.get<userData>(`${endPoints.ME}`)
}
userDetailById(id:any){
  return this.http.get(`${endPoints.USER_DETAIL}/${id}`)
}


}
