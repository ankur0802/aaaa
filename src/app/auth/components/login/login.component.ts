import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userlogin, userloginfail } from 'src/app/store/actions/user.actions';
import { login, loginResponse, userData } from 'src/app/data-types/dataTypes';
import { AuthService } from '../../providers/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user$: Observable<userData>;
  authError: string = '';
  token: string | null = '';


  constructor(
    private authservice: AuthService,
    private route: Router,
    private store: Store<{ user: userData }>,
    private toastr: ToastrService

  ) {
    this.user$ = store.pipe(select('user'));

    this.token = localStorage.getItem('auth_token');
    if (this.token) {
      
      route.navigate(['user/profile']);
    }

  }

  userLogin(data: login) {
    this.authservice.userLogin(data).subscribe((result: loginResponse) => {
        this.store.dispatch(userlogin({ userdata: result }));
        localStorage.setItem('auth_token', result.token);
  
        this.route.navigate(['user/profile']);
    },
    (error)=>{

      console.log(error);
      this.toastr.error(error.error.message)

      this.store.dispatch(userloginfail({ userdata: error.error }));
    }
    );

  }
}
