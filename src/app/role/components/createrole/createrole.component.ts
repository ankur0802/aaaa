import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../providers/service/role.service';

@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.scss']
})
export class CreateroleComponent {

  submittted:boolean=false;

constructor(private role:RoleService, private route:Router){}


  createRole(data:any){
    this.submittted = true
    this.role.createRole(data).subscribe((result)=>{
      console.log(result);
      this.route.navigate(['role/all'])
      this.submittted=false
    })
    
  }

}
