import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { permission } from 'src/app/constants/permissions/permissionconstant';
import { permissionData, roleData } from 'src/app/data-types/dataTypes';
import { RoleService } from '../../providers/service/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss'],
})
export class UpdateRoleComponent {
  submitted: boolean = false;
  permissions: any = permission;
  roledata: roleData | undefined;
  permissiondata: permissionData | undefined;
  rolename: any;
  isChecked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private role: RoleService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    const roleId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(roleId);
    if (roleId) {
      this.role.getRole(roleId).subscribe((result: any) => {
        console.log(result);
        this.rolename = result.role[0].roleName;
        this.permissiondata = result.role[0].permission;
        console.log(this.permissiondata);
      });
    }
  }

  roleUpdate(updateroleform: any) {
    this.submitted = false;
    const roleId = this.activatedRoute.snapshot.paramMap.get('id');

    let data = updateroleform.value;
    console.log(data);
    this.role.updateRole(roleId, data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.toaster.success('Role Updated Successfully');
        this.submitted = true;
      }
    },
    (error)=>{
      this.toaster.error(error.error.message)
    }
    );

  }
}
