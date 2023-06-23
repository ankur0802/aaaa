import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/providers/guard/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'auth', component:AuthComponent},
  {path:'user', component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
