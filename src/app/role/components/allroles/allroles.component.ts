import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { roleData, roleResponse } from 'src/app/data-types/dataTypes';

@Component({
  selector: 'app-allroles',
  templateUrl: './allroles.component.html',
  styleUrls: ['./allroles.component.scss'],
})
export class AllrolesComponent {
  roleListData: any;

  constructor(private store: Store, private route:Router) {}

  ngOnInit(): void {
    this.store
      .select((state) => state)
      .subscribe((result: any) => {

        console.log(result.role.data);
        
        this.roleListData = result.role.data;
      });
  }

  createrole(){
    
    this.route.navigate(['role/create'])
  }

}
