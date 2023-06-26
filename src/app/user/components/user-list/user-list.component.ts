import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userlist } from 'src/app/store/actions/user.actions';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userListData:any;

  constructor(private user:UserService, private store:Store , private route:Router){}

  ngOnInit(){

    this.user.userList().subscribe((result:any)=>{
      
  this.store.dispatch(userlist({userlistdata:result.users}))

  this.userListData = result?.users
    })

  }

  uderDetail(id:any) {

    this.route.navigate([`user/user-detail/${id}`])

  }


}
