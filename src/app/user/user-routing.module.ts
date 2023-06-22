import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/components/user-detail/user-detail.component';
import { UserListComponent } from './components/components/user-list/user-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'user', component:UserComponent , children:[
      {path:'profile', component:ProfileComponent},
      {path:'user-list', component:UserListComponent},
      {path:'user-detail', component:UserDetailComponent},
 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
