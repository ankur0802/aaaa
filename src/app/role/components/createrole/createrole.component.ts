import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { allRoles } from 'src/app/store/actions/role.actions';
import { RoleService } from '../../providers/service/role.service';

@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.scss']
})
export class CreateroleComponent {
  loader:boolean=false
  submittted:boolean=false;

constructor(private role:RoleService, private route:Router, private store:Store){}


  createRole(data:any){
    this.loader=true

    this.submittted = true
    this.role.createRole(data).subscribe((result)=>{
      if(result){
        this.route.navigate(['role/all'])
        
        this.role.allRoles().subscribe((result:any) => {
          this.store.dispatch(allRoles({ roledata: result}));
          this.submittted=false
    this.loader=false
          
        });
      }

    
    })
    
  }

}
