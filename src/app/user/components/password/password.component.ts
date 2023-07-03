import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private user:UserService, private toaster:ToastrService, private route:Router){}


  updatepassword(updatepasswordform:any){
    this.submitted=true
    let dd = updatepasswordform.value;
    this.data = {
      newPassword : dd.password,
      oldPassword : dd.oldpassword,
      confirmPassword: dd.confirmpassword
    }

    this.user.updatePassword(this.data).subscribe((result:any)=>{
      this.submitted=true
      console.log(result);
      if(result){
        this.toaster.success(result.message)
    this.submitted=false
this.route.navigate(['user/profile'])

      }
      
    },
    (error)=>{
      this.toaster.error(error?.error?.message)
    this.submitted=false

    }
    )
  }



}
