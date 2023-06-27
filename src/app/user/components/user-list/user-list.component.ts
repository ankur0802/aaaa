import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userlist } from 'src/app/store/actions/user.actions';
import { UserService } from '../../providers/user.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
 
})
export class UserListComponent {
  show: boolean = false;
  message: string = '';
  userListData: any;
  submitted: boolean = false;

  constructor(
    private user: UserService,
    private store: Store,
    private route: Router,
  ) {}

  ngOnInit() {
    this.user.userList().subscribe((result: any) => {
      this.store.dispatch(userlist({ userlistdata: result.users }));

      this.userListData = result?.users;
    });
  }

  userDetail(id: any) {
    this.route.navigate([`user/user-detail/${id}`]);
  }

  userDelete(id: string) {
    this.submitted = true;
    this.user.deleteuser(id).subscribe((result) => {
      if (result) {
        this.show = true;
        this.message = result.message;
        this.user.userList().subscribe((result: any) => {
          this.store.dispatch(userlist({ userlistdata: result.users }));

          this.userListData = result?.users;
        });
        this.submitted = false;
      }
    });
  }


  editUser(id:string){
    this.route.navigate([`user/update/${id}`])

  }


}
