import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrolesComponent } from './components/allroles/allroles.component';
import { CreateroleComponent } from './components/createrole/createrole.component';
import { UpdateRoleComponent } from './components/update-role/update-role.component';
import { RoleComponent } from './role.component';

const routes: Routes = [
  {
    path:'role', component:RoleComponent , children:[
      {path:'all', component:AllrolesComponent},
      {path:'create', component:CreateroleComponent},
      {path:'update/:id', component:UpdateRoleComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
