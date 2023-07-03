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
  name:string='';
  user_name:any;
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
     
        console.log(result);
      });
  }

  ngOnInit(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user.userDetailById(this.userId).subscribe((result:any)=>{
      // console.log(result.user);
     if(result.user){
      this.name = result.user.name
      this.user_name = result.user.username
      this.userrole = result.user.role.roleName
     }
      
    })

  }

  userUpdate(userupdateform: any) {
    let data = userupdateform.value;
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(data);

    if(!data.name || !data.username){
      data={
        name:this.name,
        username:this.user_name,
        roleId:data.roleId
      }
    }
    
    if (this.userId) {
      this.user.updateUser(this.userId, data).subscribe((result) => {
        // console.log(result);
        this.toaster.success('user Updated successfully')
        userupdateform.resetForm();

        this.user.userList().subscribe((result: any) => {
          this.store.dispatch(userlist({ userlistdata: result?.users }));
    
        }),
        this.route.navigate(['user/user-list'])
      },
      (error)=>{
        this.toaster.error(error?.error?.message)

      }
      );
    }
  }
}
