import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/providers/guard/auth.guard';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'auth', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'user',canActivate:[AuthGuard],loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'role', canActivate:[AuthGuard] , loadChildren:()=>import('./role/role.module').then(m=>m.RoleModule)},
  {path:'', redirectTo:'user/profile', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
