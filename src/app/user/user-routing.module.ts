import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/providers/guard/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'user', component:UserComponent , children:[
      {path:'profile', canActivate:[AuthGuard] ,component:ProfileComponent},
      {path:'user-list', component:UserListComponent},
      {path:'user-detail/:id', component:UserDetailComponent},
 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
