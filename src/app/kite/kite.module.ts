import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KiteRoutingModule } from './kite-routing.module';
import { KiteComponent } from './kite.component';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    KiteComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    KiteRoutingModule
  ]
})
export class KiteModule { }
