import { Component } from '@angular/core';
import axios from 'axios';
import { KiteService } from '../../providers/services/kite.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  allUsers:any;
  submitted:boolean=false

  constructor(private kite:KiteService){}


  ngOnInit(){
    this.kite.getallUser().then((response:any)=>{
      console.log(response);
      this.allUsers=response.data.data
      
    })
    .catch((error)=>{
      console.log(error);
      
    })
  }


  userDetail(id:any){
    
  }
  userDelete(id:any){

  }
  editUser(id:any){

  }


}
