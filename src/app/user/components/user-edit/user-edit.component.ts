import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { roleData } from 'src/app/data-types/dataTypes';
import { userlist } from 'src/app/store/actions/user.actions';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent {
  submitted: boolean = false;
  roleId: any;
  roleData: any;
  userId: string | null = '';
  username:any;
  userusername:any;
  userrole:any;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private user: UserService,
    private route:Router,
    private toaster:ToastrService
  ) {
    store
      .select((state) => state)
      .subscribe((result: any) => {
        this.roleData = result.role.data;
     
        console.log(this.roleData);
      });
  }

  ngOnInit(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user.userDetailById(this.userId).subscribe((result:any)=>{
      console.log(result.user);
      this.username = result.user.name
      this.userusername = result.user.username
  console.log(this.username);
  console.log(this.userusername);
  
      
    })

  }

  userUpdate(userupdateform: any) {
    let data = userupdateform.value;
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(data);

    if(!data.name || !data.username){
      data={
        name:this.username,
        username:this.userusername,
        roleId:data.roleId
      }
    }
    
    if (this.userId) {
      this.user.updateUser(this.userId, data).subscribe((result) => {
        console.log(result);
        this.toaster.success('user Updated successfully')
        userupdateform.resetForm();

        this.user.userList().subscribe((result: any) => {
          this.store.dispatch(userlist({ userlistdata: result.users }));
    
        }),
        this.route.navigate(['user/user-list'])
      },
      (error)=>{
        this.toaster.error(error.error.message)

      }
      );
    }
  }
}
