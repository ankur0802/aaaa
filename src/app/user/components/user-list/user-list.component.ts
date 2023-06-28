import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userlist } from 'src/app/store/actions/user.actions';
import { UserService } from '../../providers/user.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
 
})
export class UserListComponent {
  message: string = '';
  userListData: any;
  submitted: boolean = false;

  constructor(
    private user: UserService,
    private store: Store,
    private route: Router,
    private toastr: ToastrService

  ) {}

  ngOnInit() {
    this.user.userList().subscribe((result: any) => {
      this.store.dispatch(userlist({ userlistdata: result.users }));

      this.userListData = result?.users;
    },
    (error)=>{
      this.toastr.error(error.error.message)
      
    }
    );
  }

  userDetail(id: any) {
    this.route.navigate([`user/user-detail/${id}`]);
  }

  userDelete(id: string) {
    this.submitted = true;
    this.user.deleteuser(id).subscribe((result) => {
      if (result) {
        this.message = result.message;
        this.toastr.success(this.message)

        this.user.userList().subscribe((result: any) => {
          this.store.dispatch(userlist({ userlistdata: result.users }));

          this.userListData = result?.users;

          if(result?.users){
            this.submitted = false;
          }

        });
       
      }
    },
    (error)=>{
      this.submitted = false;
      this.toastr.error(error.error.message)
    });
  }


  editUser(id:string){
    this.route.navigate([`user/update/${id}`])

  }


}
