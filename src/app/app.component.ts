import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { myDetail } from './actions/user.actions';
import { UserService } from './user/providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cmp_2';
  token: string | null = '';

  constructor(
    private route: Router,
    private store: Store,
    private user: UserService
  ) {
    this.token = localStorage.getItem('auth_token');
    if (!this.token) {
      route.navigate(['auth/login']);
    }

    user.userDetail().subscribe((result) => {
      this.store.dispatch(myDetail({ myDetail: result }));
      // localStorage.setItem('')
    });
  }

  ngOnInit(): void {}
}
