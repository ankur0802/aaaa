import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userlogin } from 'src/app/actions/user.actions';
import { login, loginResponse, userData } from 'src/app/data-types/dataTypes';
import { AuthService } from '../../providers/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user$: Observable<userData>;

  authError: string = '';

  constructor(
    private authservice: AuthService,
    private route: Router,
    private store: Store<{ user: userData }>
  ) {
    this.user$ = store.pipe(select('user'));
  }

  userLogin(data: login) {
    this.authservice.userLogin(data).subscribe((result: loginResponse) => {
      this.store.dispatch(userlogin({ userdata: result }));
      localStorage.setItem('auth_token', result.token);

      this.route.navigate(['user/profile']);
    });
  }
}
