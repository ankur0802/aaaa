import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { roleData } from './data-types/dataTypes';
import { RoleService } from './role/providers/service/role.service';
import { allRoles } from './store/actions/role.actions';
import { myDetail } from './store/actions/user.actions';
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
    private user: UserService,
    private role: RoleService, private store1: Store<{ role: roleData }>
  ) {
    this.token = localStorage.getItem('auth_token');
    if (!this.token) {      
      route.navigate(['auth/login']);
    }

    user.userDetail().subscribe((result) => {
      this.store.dispatch(myDetail({ myDetail: result }));
      // localStorage.setItem('')
    });

    this.role.allRoles().subscribe((result:any) => {
      this.store1.dispatch(allRoles({ roledata: result}));

    }); 
  }

  ngOnInit(): void {}
}
