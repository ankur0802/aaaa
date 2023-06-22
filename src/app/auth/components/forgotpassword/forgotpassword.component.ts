import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {

  constructor(private router:Router){}

  waytologin(){

    this.router.navigate(['auth/login'])

  }
  forgotpassword(data:any){
    console.log(data);
    
  }

}
