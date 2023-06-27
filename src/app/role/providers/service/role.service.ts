import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { endPoints } from 'src/app/constants/apiEndpoints/endPoints';
import {createRoleResponse, roleData } from 'src/app/data-types/dataTypes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = environment.apiURL


  constructor(private http: HttpClient, private route:Router ) { }

  allRoles(){
    return this.http.get<roleData[]>(`${endPoints.ALL_ROLES}`)
  }

  createRole(data:any){
    return this.http.post<createRoleResponse>(`${endPoints.CREATE_ROLE}`, data)
  
  }

  deleteRole(id:string){
    return this.http.delete(`${endPoints.DELETE_ROLE}/${id}`)

  }

  getRole(id:string){
    return this.http.get(`${endPoints.GET_ROLE}/${id}`)

  }



}
