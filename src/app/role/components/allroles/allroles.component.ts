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
  permissionData:permissionData | any;
  rname:any;
  loader:boolean=false


  constructor(private store: Store, private route:Router, private role:RoleService,  
    private toastr: ToastrService
    ) {

  }


  displayStyle = 'none';

  closePopup() {
    this.displayStyle = 'none';
  }
  openPopup() {
    this.displayStyle = 'block';
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
    this.loader=true
    this.submitted=true
    this.role.deleteRole(id).subscribe((result:any)=>{
     
      
      this.role.allRoles().subscribe((result:any) => {
        this.store.dispatch(allRoles({ roledata: result}));
        
        if(result){
          this.submitted=false
    this.loader=false

        }

      }); 
      this.toastr.success(result.message)

      
    },
    (error)=>{
      this.submitted=false
        this.toastr.error(error.error.message)      
    })
  }

  updaterole(id:string){
    this.route.navigate([`role/update/${id}`])
  }


  permission(id:any, rolename:any){
    this.submitted=true

    this.role.getRole(id).subscribe((result:any)=>{
      console.log(result);
      this.rname=rolename
      
      this.permissionData = result.role[0].permission
      console.log(this.permissionData);
      
      this.openPopup();
      this.submitted=false

      
    })
  }


}
