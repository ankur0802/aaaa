import { Component } from '@angular/core';
import { login } from 'src/app/data-types/dataTypes';
import { AuthService } from '../../providers/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' ]
})
export class LoginComponent {

constructor(private authservice:AuthService){}

  userLogin(data:login){

 this.authservice.userLogin(data)

  }

  

}
