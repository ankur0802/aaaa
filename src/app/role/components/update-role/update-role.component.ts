import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { permission } from 'src/app/constants/permissions/permissionconstant';
import { permissionData, roleData } from 'src/app/data-types/dataTypes';
import { RoleService } from '../../providers/service/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent {

  submitted:boolean=false;
  permissions:any = permission;
  roledata:roleData | undefined;
  permissiondata:permissionData | undefined;

  constructor(private activatedRoute: ActivatedRoute, private role:RoleService){}

  ngOnInit():void{
    const roleId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(roleId);
    if(roleId){
      this.role.getRole(roleId).subscribe((result:any)=>{
        console.log(result);

        this.permissiondata=result.role[0].permission
        console.log(this.permissiondata);
        
      })
    }
 

  }


  roleUpdate(roleupdateform:any){
 



    let data = roleupdateform.value;

  }


}
