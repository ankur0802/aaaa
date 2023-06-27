import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { roleData } from 'src/app/data-types/dataTypes';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent {
  submitted: boolean = false;
  roleId: any;
  roleData:any;
userId:string | null='';

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private user:UserService) {
    store
      .select((state) => state)
      .subscribe((result: any) => {
   
      this.roleData = result.role.data;
console.log(this.roleData);

      });
  }

  
  userUpdate(userupdateform: any) {
    let data = userupdateform.value;
     this.userId = this.activatedRoute.snapshot.paramMap.get('id')
     if(this.userId){
this.user.updateUser(this.userId, data).subscribe((result)=>{
  console.log(result);
  userupdateform.resetForm()
  

})
     }


  }
}
