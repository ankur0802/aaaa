import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AllrolesComponent } from './components/allroles/allroles.component';
import { SharedModule } from '../shared/shared.module';
import { CreateroleComponent } from './components/createrole/createrole.component';
import { FormsModule } from '@angular/forms';
import { UpdateRoleComponent } from './components/update-role/update-role.component';


@NgModule({
  declarations: [
    RoleComponent,
    AllrolesComponent,
    CreateroleComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class RoleModule { }
