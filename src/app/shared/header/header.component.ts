import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user/providers/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userData: any;

  constructor(private store: Store, private route:Router, private user:UserService, private toaster:ToastrService) {
    store
      .select((state) => state)
      .subscribe((result: any) => {
        this.userData = result.user.myDetail.user;
      });
  }

  profilevisit() {
    this.route.navigate(['user/profile'])
  }

  logout() {
    this.user.logout().subscribe((result:any)=>{
      if(result){
       this.toaster.success(result.message)
       localStorage.removeItem('auth_token')
        this.route.navigate(['auth/login'])
      }
    },
    (error)=>{
      this.toaster.error(error.error.message)
    }
    )
  }
}
