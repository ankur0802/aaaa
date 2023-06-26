import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {myDetail } from 'src/app/store/actions/user.actions';
import { AuthService } from 'src/app/auth/providers/services/auth.service';
import { loginResponse, userData } from 'src/app/data-types/dataTypes';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  loginResponseData:any;
  userData:userData | undefined ;

  constructor( private authservice:AuthService, private store:Store, private user:UserService){
    // authservice.userData$.subscribe((result)=>{
  
      
    // })

    user.userDetail().subscribe((result)=>{
      this.store.dispatch(myDetail({myDetail:result}))
    
        })

    store.select(state=>state).subscribe((result:any)=>{
          this.loginResponseData = result?.user
      this.userData =result?.user.myDetail.user;
 
      
    })
   
  }





}
