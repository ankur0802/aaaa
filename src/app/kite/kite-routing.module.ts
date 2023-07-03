import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { KiteComponent } from './kite.component';

const routes: Routes = [
  {
    path:'kite', component:KiteComponent , children:[
      {path:'users', component:UsersComponent},
      {path:'user/:id', component:UserDetailComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiteRoutingModule { }
