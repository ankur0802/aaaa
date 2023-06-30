import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { userData } from 'src/app/store/actions/kiteuser.actions';
import { KiteService } from '../../providers/services/kite.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  allUsers:any;
  submitted:boolean=false
  userdata:object={}

  constructor(private kite:KiteService, private route:Router, private store:Store, private toaster:ToastrService){}


  ngOnInit(){
    this.kite.getallUser().then((response:any)=>{
      console.log(response);
      this.allUsers=response.data.data
      
    })
    .catch((error)=>{
      this.toaster.error(error.error.message)
       
    })
  }


  userDetail(id:any, name:any){
    console.log(id);
if(this.allUsers){
  let userDetail = this.allUsers.map((data:any)=>{
    // console.log(data);
    if(data._id == id){
      this.userdata = data
      return data
    }
    
    })
    
  }
  this.store.dispatch(userData(({userdata:this.userdata})))

    this.route.navigate([`kite/user/${id}`])
    
  }
  userDelete(id:any){

  }
  editUser(id:any){

  }


}
