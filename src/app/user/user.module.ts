import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserListComponent } from './components/components/user-list/user-list.component';
import { UserDetailComponent } from './components/components/user-detail/user-detail.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    UserListComponent,
    UserDetailComponent,
    SidebarComponent,
    HeaderComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
