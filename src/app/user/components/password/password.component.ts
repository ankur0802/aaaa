import { Component } from '@angular/core';
import { changePasswordInput } from 'src/app/data-types/dataTypes';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  submitted:boolean=false;
  data:changePasswordInput | undefined;

  constructor(private user:UserService){}


  updatepassword(updatepasswordform:any){
    let dd = updatepasswordform.value;
    this.data = {
      newPassword : dd.password,
      oldPassword : dd.oldpassword,
      confirmPassword: dd.confirmpassword
    }

    this.user.updatePassword(this.data).subscribe((result)=>{
      this.submitted=true
      console.log(result);
      if(result){
      }
      
    })
  }



}
