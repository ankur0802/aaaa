import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'auth', component:AuthComponent},
  {path:'user', component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
