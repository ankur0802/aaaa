import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    UserListComponent,
    UserDetailComponent,
    CreateComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class UserModule { }
