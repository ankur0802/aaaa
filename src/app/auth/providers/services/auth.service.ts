import { Injectable } from '@angular/core';
import { login } from 'src/app/data-types/dataTypes';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import  {endPoints} from '../../../constants/apiEndpoints/endPoints'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiURL
  public getJsonData:any ;

  constructor(private http: HttpClient, private route:Router ) { }

  userLogin(data:login){
    this.http.post(`${endPoints.LOGIN}`, data ,  {observe:'response'}).subscribe((result)=>{
  
      if(result){
        this.getJsonData = result;
      }
    })
  }

}
