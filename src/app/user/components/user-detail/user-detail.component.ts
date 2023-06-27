import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {

  userData:any;

  constructor(private activatedRoute: ActivatedRoute, private user:UserService) {}

  ngOnInit():void{

    const userId = this.activatedRoute.snapshot.paramMap.get('id')
    
    this.user.userDetailById(userId).subscribe((result:any)=>{

      this.userData = result.user
      
    })

  }

}
