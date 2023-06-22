import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
