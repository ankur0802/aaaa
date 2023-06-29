import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { KiteComponent } from './kite.component';

const routes: Routes = [
  {
    path:'kite', component:KiteComponent , children:[
      {path:'users', component:UsersComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiteRoutingModule { }