import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { roleData, roleResponse } from 'src/app/data-types/dataTypes';
import { RoleService } from '../../providers/service/role.service';

@Component({
  selector: 'app-allroles',
  templateUrl: './allroles.component.html',
  styleUrls: ['./allroles.component.scss'],
})
export class AllrolesComponent {
  roleListData: any;
  submitted:boolean=false;

  constructor(private store: Store, private route:Router, private role:RoleService) {
    this.store
    .select((state) => state)
    .subscribe((result: any) => {        
      this.roleListData = result.role.data;
    });
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
    this.role.deleteRole(id).subscribe((result)=>{
      console.log(result);
      if(result){
        this.store
        .select((state) => state)
        .subscribe((result: any) => {
  
          console.log(result.role.data);
          
          this.roleListData = result.role.data;
          this.submitted=false
        });
      }
      
    })
  }

  updaterole(id:string){
    this.route.navigate([`role/update/${id}`])
  }

}
