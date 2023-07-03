import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { allRoles } from '../store/actions/role.actions';
import { roleData } from '../data-types/dataTypes';
import { RoleService } from './providers/service/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  constructor(private role: RoleService, private store: Store<{ role: roleData }>) {}

  ngOnInit(): void {
    this.role.allRoles().subscribe((result:any) => {
      this.store.dispatch(allRoles({ roledata: result}));

    }); 
  }
}
