import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { permissionData, roleData, roleResponse } from 'src/app/data-types/dataTypes';
import { allRoles } from 'src/app/store/actions/role.actions';
import { RoleService } from '../../providers/service/role.service';
import { permission } from 'src/app/constants/permissions/permissionconstant';

@Component({
  selector: 'app-allroles',
  templateUrl: './allroles.component.html',
  styleUrls: ['./allroles.component.scss'],
})
export class AllrolesComponent {
  roleListData: any;
  submitted:boolean=false;
  permissions: any = permission;
  permissionData:any;


  constructor(private store: Store, private route:Router, private role:RoleService,  
    private toastr: ToastrService
    ) {

  }

  ngOnInit(): void {
    this.store
    .select((state) => state)
    .subscribe((result: any) => {        
      this.roleListData = result.role.data;
      
    });


  }

  createrole(){
    
    this.route.navigate(['role/create'])
  }

  deleterole(id:string){
    this.submitted=true
    this.role.deleteRole(id).subscribe((result:any)=>{
      this.toastr.success(result.message)
      
      this.role.allRoles().subscribe((result:any) => {
        this.store.dispatch(allRoles({ roledata: result}));
        
      }); 

      this.submitted=false
      
    },
    (error)=>{
      this.submitted=false
        this.toastr.error(error.error.message)      
    })
  }

  updaterole(id:string){
    this.route.navigate([`role/update/${id}`])
  }


  permission(id:any){
    this.role.getRole(id).subscribe((result:any)=>{
      console.log(result);
      
      this.permissionData = result.role[0].permission
      
    })
  }


}
